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
            <div className="flex items-center gap-1 text-heading-secondary">
               <TbPointFilled className="size-5" />
               <h2>{call?.estadoSolicitud}</h2>
            </div>
            <div className="mt-5 ">
               <h1 className="text-2xl font-semibold text-primary">
                  Nombre del Puesto
               </h1>
               <h2>{call?.modalidad}</h2>
            </div>

            <div className="flex justify-between mt-2">
               <div className="flex gap-2">
                  <h3>Subárea:</h3>
                  <h4> {call?.nombreArea}</h4>
               </div>
               <div className="flex gap-2">
                  <h3>Cantidad:</h3>
                  <h4>{call?.cantidadSolicitada}</h4>
               </div>
            </div>

            <div className="flex justify-between">
               <h3>Reclutador(a) asginado:</h3>
               <h4>{call?.reclutador}</h4>
            </div>
         </div>
      </NavLink>
   );
};

export default ItemCall;
