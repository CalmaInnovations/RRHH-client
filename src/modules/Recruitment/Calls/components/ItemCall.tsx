import React from "react";
import { TbPointFilled } from "react-icons/tb";
import { CallDetail } from "../interfaces/calls-interfaces";
import { NavLink } from "react-router-dom";

interface ItemProps {
   call: CallDetail;
}

const ItemCall = ({ call }: ItemProps) => {
   return (
      <NavLink to={`/call/kanban/${call?.idConvocatoria}`}>
         <div className="bg-light p-6 rounded-md shadow-lg cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            {/* Status Section */}
            <div className="flex items-center gap-3">
               <TbPointFilled className="size-5 text-heading-secondary" />
               <h2>{call?.estadoSolicitud}</h2>
            </div>

            {/* Title Section */}
            <div className="mt-3">
               <h1>Nombre del Puesto</h1>
               <h2 className="mt-1">{call?.modalidad}</h2>
            </div>

            {/* Details Section */}
            <div className="mt-4 flex flex-col gap-3">
               <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                     <h3 className="mb-0">Subárea:</h3>
                     <h4 className="leading-none">{call?.nombreArea}</h4>
                  </div>
                  <div className="flex items-baseline gap-2">
                     <h3 className="mb-0">Cantidad:</h3>
                     <h4 className="leading-none">
                        {call?.cantidadSolicitada}
                     </h4>
                  </div>
               </div>

               {/* Recruiter Section */}
               <div className="flex items-baseline justify-between">
                  <h3 className="mb-0">Reclutador(a) asignado:</h3>
                  <h4 className="leading-none">{call?.reclutador}</h4>
               </div>
            </div>
         </div>
      </NavLink>
   );
};

export default ItemCall;
