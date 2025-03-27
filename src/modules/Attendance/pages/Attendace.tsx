import Table from "@/shared/components/Table";
import { MdEdit } from "react-icons/md";
import { BiSolidTrashAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { openModal } from "@/shared/slices/modalSlice";
import ModalAddAttendace from "../components/ModalAddAttendace";
import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import { FaPlus } from "react-icons/fa6";
import ModalEditAttendace from "../components/ModalEditAttendace";
import ModalDeleteAttendace from "../components/ModalDeleteAttendace";

type Worker = {
   id: number;
   name: string;
   entryTime: string;
   exitTime: string;
};
const Attendace = () => {
   const dispatch = useDispatch();

   const columns: { key: keyof Worker; label: string }[] = [
      { key: "id", label: "ID" },
      { key: "name", label: "Nombre" },
      { key: "entryTime", label: "Hora de Entrada" },
      { key: "exitTime", label: "Hora de Salida" },
   ];

   const data: Worker[] = [
      {
         id: 1,
         name: "Juan Pérez",
         entryTime: "08:00 AM",
         exitTime: "05:00 PM",
      },
      { id: 2, name: "Ana López", entryTime: "-- --", exitTime: "-- --" },
      { id: 2, name: "Ana López", entryTime: "09:00 AM", exitTime: "06:00 PM" },
      { id: 2, name: "Ana López", entryTime: "09:00 AM", exitTime: "06:00 PM" },

      { id: 2, name: "Ana López", entryTime: "09:00 AM", exitTime: "06:00 PM" },

      { id: 2, name: "Ana López", entryTime: "09:00 AM", exitTime: "06:00 PM" },
      { id: 2, name: "Ana López", entryTime: "09:00 AM", exitTime: "06:00 PM" },
      { id: 2, name: "Ana López", entryTime: "09:00 AM", exitTime: "06:00 PM" },
      { id: 2, name: "Ana López", entryTime: "09:00 AM", exitTime: "06:00 PM" },
      { id: 2, name: "Ana López", entryTime: "09:00 AM", exitTime: "06:00 PM" },
   ];

   const renderActions = () => (
      <div className="flex space-x-2">
         <button className="p-1 rounded-md bg-backg-warning text-tx-warning transition cursor-pointer">
            <MdEdit
               className="size-4"
               onClick={() => dispatch(openModal("ModalEditAttend"))}
            />
         </button>
         <button
            className="p-1 rounded-md bg-backg-success text-success transition cursor-pointer"
            onClick={() => dispatch(openModal("ModalAddAttend"))}
         >
            <FaPlus className="size-4" />
         </button>
         <button className="p-1 rounded-md bg-backg-danger text-danger transition cursor-pointer">
            <BiSolidTrashAlt
               className="size-4"
               onClick={() => dispatch(openModal("ModalDeletetAttend"))}
            />
         </button>
      </div>
   );

   return (
      <div>
         <h1>Asitencias</h1>
         <div className="flex mt-6 w-96 gap-2">
            <Input
               type="search"
               placeholder="buscar por nombre del trabajador"
            />
            <Button>
               <IoSearch className="size-5" />
            </Button>
         </div>
         <div className="mt-8">
            <Table
               columns={columns}
               data={data}
               renderActions={renderActions}
            />
         </div>

         <ModalAddAttendace />

         <ModalEditAttendace />

         <ModalDeleteAttendace />
      </div>
   );
};

export default Attendace;
