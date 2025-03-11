// import React from "react";
// import { TbPointFilled } from "react-icons/tb";
// import { CallDetail } from "../interfaces/calls-interfaces";

// interface ItemProps {
//    call: CallDetail;
// }

// const ItemCall = ({ call }: ItemProps) => {
//    return (
//       <div className="bg-light p-4 rounded-md shadow-lg cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl ">
//          <div className="flex items-center gap-1 text-heading-secondary">
//             <TbPointFilled className="size-5" />
//             <h2>{call?.estadoSolicitud}</h2>
//          </div>
//          <div className="mt-5 ">
//             <h1 className="text-2xl font-semibold text-primary">
//                Nombre del Puesto
//             </h1>
//             <h2>{call?.modalidad}</h2>
//          </div>

//          <div className="flex justify-between mt-2">
//             <div className="flex gap-2">
//                <h3>Subárea:</h3>
//                <h4> {call?.nombreArea}</h4>
//             </div>
//             <div className="flex gap-2">
//                <h3>Cantidad:</h3>
//                <h4>{call?.cantidadSolicitada}</h4>
//             </div>
//          </div>

//          <div className="flex justify-between">
//             <h3>Reclutador(a) asignado:</h3>
//             <h4>{call?.reclutador}</h4>
//          </div>
//       </div>
//    );
// };

// export default ItemCall;

import React from "react";
import { TbPointFilled } from "react-icons/tb";
import { CallDetail } from "../interfaces/calls-interfaces";

interface ItemProps {
   call: CallDetail;
}

const ItemCall = ({ call }: ItemProps) => {
   return (
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
                  <h4 className="leading-none">{call?.cantidadSolicitada}</h4>
               </div>
            </div>

            {/* Recruiter Section */}
            <div className="flex items-baseline justify-between">
               <h3 className="mb-0">Reclutador(a) asignado:</h3>
               <h4 className="leading-none">{call?.reclutador}</h4>
            </div>
         </div>
      </div>
   );
};

export default ItemCall;
