import { Static, Group, Redondo, Time } from "../../../assets/images";
import { format } from "date-fns";
import { Solicitudes } from "../interfaces/Request-interfaces";
import { FiEdit } from "react-icons/fi";

interface ItemProps {
   sold: Solicitudes;
   onEdit: (id: string) => void;
}

const ItemRequest = ({ sold }: ItemProps) => {
   const formatDate = format(new Date(sold?.fechaSolicitud), "dd/MM/yyyy");

   return (
      <div className="bg-white mx-auto shadow-xl rounded-lg p-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-full flex flex-col">
         {/* Contenedor principal */}
         <div className="flex-grow flex flex-col">
            {/* Título y Área */}
            <div className="space-y-2 mb-4 sm:mb-6">
               <h1 className="text-lg sm:text-xl font-bold break-words">
                  {sold?.puesto}
               </h1>
               <h2 className="text-md sm:text-lg">
                  Área de Desarrollo de Software
               </h2>
            </div>

            {/* Descripción */}
            <h4 className="mb-4 sm:mb-6 text-sm sm:text-base break-words">
               {sold?.observaciones}
            </h4>

            {/* Detalles */}
            <div className="flex flex-col gap-4 sm:gap-5">
               {/* Cantidad */}
               <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 flex justify-center items-center p-2 sm:p-3 rounded-md bg-hover-grey w-10 h-10 sm:w-12 sm:h-12">
                     <img
                        src={Static}
                        alt="Cantidad"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                     />
                  </div>
                  <div>
                     <p className="text-md text-secondary-blue font-semibold">
                        Cantidad:
                     </p>
                     <h4 className="break-words text-sm sm:text-base">
                        {sold?.cantidad}
                     </h4>
                  </div>
               </div>

               {/* Fecha */}
               <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 flex justify-center items-center p-2 sm:p-3 rounded-md bg-hover-grey w-10 h-10 sm:w-12 sm:h-12">
                     <img
                        src={Time}
                        alt="Fecha"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                     />
                  </div>
                  <div>
                     <p className="text-md text-secondary-blue font-semibold">
                        Fecha:
                     </p>
                     <h4 className="break-words text-sm sm:text-base">
                        {formatDate}
                     </h4>
                  </div>
               </div>

               {/* Habilidades blandas */}
               <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 flex justify-center items-center p-2 sm:p-3 rounded-md bg-hover-grey w-10 h-10 sm:w-12 sm:h-12">
                     <img
                        src={Group}
                        alt="Habilidades blandas"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                     />
                  </div>
                  <div className="flex-1">
                     <p className="text-md text-secondary-blue font-semibold">
                        Habilidades blandas:
                     </p>
                     <h4 className="line-clamp-3 break-words text-sm sm:text-base">
                        {sold?.habilidadesBlandas}
                     </h4>
                  </div>
               </div>

               {/* Habilidades técnicas */}
               <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 flex justify-center items-center p-2 sm:p-3 rounded-md bg-hover-grey w-10 h-10 sm:w-12 sm:h-12">
                     <img
                        src={Redondo}
                        alt="Habilidades técnicas"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                     />
                  </div>
                  <div className="flex-1">
                     <p className="text-md text-secondary-blue font-semibold">
                        Habilidades técnicas:
                     </p>
                     <h4 className="line-clamp-3 break-words text-sm sm:text-base">
                        {sold?.conocimientosTecnicos}
                     </h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ItemRequest;
