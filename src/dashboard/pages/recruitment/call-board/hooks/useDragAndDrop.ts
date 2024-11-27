import {  useState } from "react";
import { DragEndEvent, DragMoveEvent, DragStartEvent, KeyboardSensor, PointerSensor, UniqueIdentifier, useSensor, useSensors } from "@dnd-kit/core";
import { containersData } from "../mocks/containers";
import { v4 as uuidv4 } from "uuid";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { CallInterface } from "../interface/call.interface";



export const useDragAndDrop = () => {
   const [containers, setContainers] = useState<CallInterface[]>(containersData);
   const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
   const [currentContainerId, setCurrentContainerId] =
      useState<UniqueIdentifier>();
   const [containerName, setContainerName] = useState("");
   const [itemName, setItemName] = useState("");
   const [showAddContainerModal, setShowAddContainerModal] = useState(false);
   const [showAddItemModal, setShowAddItemModal] = useState(false);

   console.log(currentContainerId)

   const onAddContainer = () => {
      if (!containerName) return;
      const id = `container-${uuidv4()}`;
      setContainers([
         ...containers,
         {
            id,
            title: containerName,
            items: [],
         },
      ]);
      setContainerName("");
      setShowAddContainerModal(false);
   };

   // const onAddItem = () => {
   //    if (!itemName) return;
   //    const id = `item-${uuidv4()}`;
   //    const container = containers.find(
   //       (item) => item.id === currentContainerId
   //    );
   //    if (!container) return;
   //    container.items.push({
   //       id,
   //       title: itemName,
   //    });
   //    setContainers([...containers]);
   //    setItemName("");
   //    setShowAddItemModal(false);
   // };

   // Find the value of the items
   function findValueOfItems(id: UniqueIdentifier | undefined, type: string) {
      if (type === "container") {
         return containers.find((item) => item.id === id);
      }
      if (type === "item") {
         console.log("Desde validacion item", containers.find((container) =>
            container.items.find((item) => {
               console.log("item", item)
               console.log("id", id)
            })
         ))

         return containers.find((container) =>
            container.items.find((item) => item.id === id)
         );
      }
   }

   const findItemTitle = (id: UniqueIdentifier | undefined) => {
      const container = findValueOfItems(id, "item");
      if (!container) return "";
      const item = container.items.find((item) => item.id === id);
      if (!item) return "";
      return item.modalidadPracticas;
   };

   const findContainerTitle = (id: UniqueIdentifier | undefined) => {
      const container = findValueOfItems(id, "container");
      if (!container) return "";
      return container.title;
   };

   const findContainerItems = (id: UniqueIdentifier | undefined) => {
      const container = findValueOfItems(id, "container");
      if (!container) return [];
      return container.items;
   };

   // DND Handlers
   const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
         coordinateGetter: sortableKeyboardCoordinates,
         activationConstraint: {delay: 2, tolerance: 5, distance: 100},
         onActivation: (event) => console.log("onActivation", event)
      })
   );

   function handleDragStart(event: DragStartEvent) {
      const { active } = event;
      const { id } = active;
      setActiveId(id);
   }

   const handleDragMove = (event: DragMoveEvent) => {
      const { active, over } = event;

      // Handle Items Sorting
      if (
         active.id &&
         over?.id &&
         active &&
         over &&
         active.id !== over.id
      ) {

         console.log("active.id", active.id)
         console.log("over.id", over.id)

         // Find the active container and over container
         const activeContainer = findValueOfItems(active.id, "item");
         console.log("activeContainer", activeContainer)
         const overContainer = findValueOfItems(over.id, "item");
         console.log("overContainer", overContainer)


         // If the active or over container is not found, return
         if (!activeContainer || !overContainer) return;

         // Find the index of the active and over container
         const activeContainerIndex = containers.findIndex(
            (container) => container.id === activeContainer.id
         );

         console.log("activeContainerIndex", activeContainerIndex)

         const overContainerIndex = containers.findIndex(
            (container) => container.id === overContainer.id
         );

         console.log("overContainerIndex", overContainerIndex)


         // Find the index of the active and over item
         const activeitemIndex = activeContainer.items.findIndex(
            (item) => item.id === active.id
         );
         const overitemIndex = overContainer.items.findIndex(
            (item) => item.id === over.id
         );
         // In the same container
         if (activeContainerIndex === overContainerIndex) {
            const newItems = [...containers];
            newItems[activeContainerIndex].items = arrayMove(
               newItems[activeContainerIndex].items,
               activeitemIndex,
               overitemIndex
            );

            setContainers(newItems);
         } else {
            // In different containers
            const newItems = [...containers];
            const [removeditem] = newItems[activeContainerIndex].items.splice(
               activeitemIndex,
               1
            );
            newItems[overContainerIndex].items.splice(
               overitemIndex,
               0,
               removeditem
            );
            setContainers(newItems);
         }
      }

      // Handling Item Drop Into a Container
      if (
         active.id &&
         over?.id &&
         active &&
         over &&
         active.id !== over.id
      ) {
         // Find the active and over container
         const activeContainer = findValueOfItems(active.id, "item");
         const overContainer = findValueOfItems(over.id, "container");

         // If the active or over container is not found, return
         if (!activeContainer || !overContainer) return;

         // Find the index of the active and over container
         const activeContainerIndex = containers.findIndex(
            (container) => container.id === activeContainer.id
         );
         const overContainerIndex = containers.findIndex(
            (container) => container.id === overContainer.id
         );

         // Find the index of the active and over item
         const activeitemIndex = activeContainer.items.findIndex(
            (item) => item.id === active.id
         );

         // Remove the active item from the active container and add it to the over container
         const newItems = [...containers];
         const [removeditem] = newItems[activeContainerIndex].items.splice(
            activeitemIndex,
            1
         );
         newItems[overContainerIndex].items.push(removeditem);
         setContainers(newItems);
      }
   };

   // This is the function that handles the sorting of the containers and items when the user is done dragging.
   function handleDragEnd(event: DragEndEvent) {
      const { active, over } = event;

      // Handling item Sorting
      if (
         active.id &&
         over?.id &&
         active &&
         over &&
         active.id !== over.id
      ) {
         // Find the active and over container
         const activeContainer = findValueOfItems(active.id, "item");
         const overContainer = findValueOfItems(over.id, "item");

         // If the active or over container is not found, return
         if (!activeContainer || !overContainer) return;
         // Find the index of the active and over container
         const activeContainerIndex = containers.findIndex(
            (container) => container.id === activeContainer.id
         );
         const overContainerIndex = containers.findIndex(
            (container) => container.id === overContainer.id
         );
         // Find the index of the active and over item
         const activeitemIndex = activeContainer.items.findIndex(
            (item) => item.id === active.id
         );
         const overitemIndex = overContainer.items.findIndex(
            (item) => item.id === over.id
         );

         // In the same container
         if (activeContainerIndex === overContainerIndex) {
            const newItems = [...containers];
            newItems[activeContainerIndex].items = arrayMove(
               newItems[activeContainerIndex].items,
               activeitemIndex,
               overitemIndex
            );
            setContainers(newItems);
         } else {
            // In different containers
            const newItems = [...containers];
            const [removeditem] = newItems[activeContainerIndex].items.splice(
               activeitemIndex,
               1
            );
            newItems[overContainerIndex].items.splice(
               overitemIndex,
               0,
               removeditem
            );
            setContainers(newItems);
         }
      }
      // Handling item dropping into Container
      if (
         active.id &&
         over?.id &&
         active &&
         over &&
         active.id !== over.id
      ) {
         // Find the active and over container
         const activeContainer = findValueOfItems(active.id, "item");
         const overContainer = findValueOfItems(over.id, "container");

         // If the active or over container is not found, return
         if (!activeContainer || !overContainer) return;
         // Find the index of the active and over container
         const activeContainerIndex = containers.findIndex(
            (container) => container.id === activeContainer.id
         );
         const overContainerIndex = containers.findIndex(
            (container) => container.id === overContainer.id
         );
         // Find the index of the active and over item
         const activeitemIndex = activeContainer.items.findIndex(
            (item) => item.id === active.id
         );

         const newItems = [...containers];
         const [removeditem] = newItems[activeContainerIndex].items.splice(
            activeitemIndex,
            1
         );
         newItems[overContainerIndex].items.push(removeditem);
         setContainers(newItems);
      }
      setActiveId(null);
   }

   return {
      showAddContainerModal,
      activeId,
      sensors,
      showAddItemModal,
      containerName,
      itemName,
      containers,
      setShowAddContainerModal,
      setCurrentContainerId,
      onAddContainer,
      // onAddItem,
      findItemTitle,
      findContainerTitle,
      handleDragEnd,
      findContainerItems,
      handleDragStart,
      handleDragMove,
      setContainerName,
      setShowAddItemModal,
      setItemName,
      setContainers
   }
}
