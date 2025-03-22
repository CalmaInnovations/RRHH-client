import { SolicitudesRCT } from "../interfaces/RequestRct-interfaces";
import { Static, Group, Redondo, Time } from "../../../../assets/images";
import { format } from "date-fns";
import Button from "../../../../shared/components/Button";

interface ItemProps {
   sold: SolicitudesRCT;
   onAssign: (solicitudId: number) => void;
}

const ItemRequestRct = ({ sold, onAssign }: ItemProps) => {
   const formatDate = format(new Date(sold?.fechaSolicitud), "dd/MM/yyyy");

   return (
      <div className="bg-white shadow-xl rounded-lg p-6 h-full flex flex-col min-h-full">
         {/* Content wrapper */}
         <div className="flex-grow">
            {/* Header section */}
            <div className="space-y-2 mb-6">
               <h1 className="text-lg font-bold break-words">{sold?.puesto}</h1>
               <h2 className="text-md text-gray-600 break-words">
                  Área de Desarrollo de Software
               </h2>
            </div>

            {/* Description */}
            <div className="mb-8">
               <h4 className="break-words text-sm text-gray-700">
                  {sold?.observaciones}
               </h4>
            </div>

            {/* Details section */}
            <div className="space-y-6">
               {/* Cantidad */}
               <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex justify-center items-center p-3 rounded-md bg-hover-grey w-12 h-12">
                     <img src={Static} alt="Cantidad" className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-md text-secondary-blue font-semibold">
                        Cantidad:
                     </p>
                     <h4 className="break-words">{sold?.cantidad}</h4>
                  </div>
               </div>

               {/* Fecha */}
               <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex justify-center items-center p-3 rounded-md bg-hover-grey w-12 h-12">
                     <img src={Time} alt="Fecha" className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-md text-secondary-blue font-semibold">
                        Fecha:
                     </p>
                     <h4 className="break-words">{formatDate}</h4>
                  </div>
               </div>

               {/* Habilidades */}
               <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex justify-center items-center p-3 rounded-md bg-hover-grey w-12 h-12">
                     <img
                        src={Group}
                        alt="Habilidades blandas"
                        className="w-6 h-6"
                     />
                  </div>
                  <div className="flex-1">
                     <p className="text-md text-secondary-blue font-semibold">
                        Habilidades blandas:
                     </p>
                     <h4 className="break-words text-sm text-gray-700">
                        {sold?.habilidadesBlandas}
                     </h4>
                  </div>
               </div>

               {/* Conocimientos */}
               <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex justify-center items-center p-3 rounded-md bg-hover-grey w-12 h-12">
                     <img
                        src={Redondo}
                        alt="Habilidades técnicas"
                        className="w-6 h-6"
                     />
                  </div>
                  <div className="flex-1">
                     <p className="text-md text-secondary-blue font-semibold">
                        Habilidades técnicas:
                     </p>
                     <h4 className="break-words text-sm text-gray-700">
                        {sold?.conocimientosTecnicos}
                     </h4>
                  </div>
               </div>
            </div>
         </div>

         {/* Button section */}
         <div className="mt-8 pt-6 border-t border-gray-200">
            <Button
               fullWidth
               onClick={() => onAssign(sold?.id)}
               className="py-2.5 text-sm font-medium transition-colors duration-200"
            >
               Convertir a convocatoria
            </Button>
         </div>
      </div>
   );
};

export default ItemRequestRct;
