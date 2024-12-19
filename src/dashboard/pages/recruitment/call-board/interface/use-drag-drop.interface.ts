import { DragEndEvent, DragMoveEvent, DragStartEvent, UniqueIdentifier } from "@dnd-kit/core";
import { CallInterface, Postulant } from "./call.interface";

export interface DragAndDropReturn {
   showAddContainerModal: boolean;
   activeId: UniqueIdentifier | null;
   showAddItemModal: boolean;
   containerName: string;
   itemName: string;
   containers: CallInterface[];
   setShowAddContainerModal: React.Dispatch<React.SetStateAction<boolean>>;
   currentContainerId: UniqueIdentifier | undefined;
   setCurrentContainerId: React.Dispatch<React.SetStateAction<UniqueIdentifier | undefined>>;
   onAddContainer: () => void;
   // onAddItem: () => void;
   findItemTitle: (id: UniqueIdentifier | undefined) => Postulant;
   findContainerTitle: (id: UniqueIdentifier | undefined) => string;
   handleDragEnd: (event: DragEndEvent) => void;
   findContainerItems: (id: UniqueIdentifier | undefined) => Postulant[];
   handleDragStart: (event: DragStartEvent) => void;
   handleDragMove: (event: DragMoveEvent) => void;
   setContainerName: React.Dispatch<React.SetStateAction<string>>;
   setShowAddItemModal: React.Dispatch<React.SetStateAction<boolean>>;
   setItemName: React.Dispatch<React.SetStateAction<string>>;
   setContainers: React.Dispatch<React.SetStateAction<CallInterface[]>>;
 }
