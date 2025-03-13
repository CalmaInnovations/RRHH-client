import { TbPointFilled } from "react-icons/tb";
import { CallDetail } from "../interfaces/calls-interfaces";
import { NavLink } from "react-router-dom";

interface ItemProps {
   call: CallDetail;
}

const ItemCall = ({ call }: ItemProps) => {
   return (
      <NavLink to={`/call/kanban/${call?.idConvocatoria}`}>
         <div className="bg-light p-4 rounded-md shadow-lg cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl ">
            <div className="flex items-center gap-1 text-grey-dark-ligth">
               <TbPointFilled className="size-5" />
               <h1>{call?.estadoSolicitud}</h1>
            </div>
            <div className="mt-5 ">
               <h1 className="text-2xl font-semibold text-primary">
                  Nombre del Puesto
               </h1>
               <h3 className="font-medium text-grey-dark-ligth">
                  {call?.modalidad}
               </h3>
            </div>

            <div className="flex justify-between mt-2">
               <div className="flex gap-2">
                  <h1 className="text-dark">Subárea:</h1>
                  <h1 className="text-grey"> {call?.nombreArea}</h1>
               </div>
               <div className="flex gap-2">
                  <h1 className="text-dark">Cantidad:</h1>
                  <h1 className="text-grey">{call?.cantidadSolicitada}</h1>
               </div>
            </div>

            <div className="flex justify-between">
               <h1 className="text-dark">Reclutador(a) asginado:</h1>
               <h1 className="text-grey">{call?.reclutador}</h1>
            </div>
         </div>
      </NavLink>
   );
};

export default ItemCall;
