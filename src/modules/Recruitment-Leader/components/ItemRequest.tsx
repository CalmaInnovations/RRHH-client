import { Static, Group, Redondo, Time } from "../../../assets/images";
import { format } from "date-fns";
import { Solicitudes } from "../interfaces/Request-interfaces";
import { FiEdit } from "react-icons/fi";

interface ItemProps {
   sold: Solicitudes;
   onEdit: (id: string) => void; // Función para manejar la edición
}
const ItemRequest = ({ sold }: ItemProps) => {
   const formatDate = format(new Date(sold?.fechaSolicitud), "dd/MM/yyyy");

   return (
      <div className="bg-white shadow-lg rounded-lg px-10 py-8 mb-6 w-[24rem] h-[38rem] relative">
         {/* Botón de edición */}
         <button
            onClick={() => onEdit(String(sold?.id))}
            className="absolute top-4 right-4 text-gray-600 hover:text-[var(--color-primary)] transition-colors"
         >
            <FiEdit size={22} />
         </button>
         <div className="h-full">
            {/* Título y Área */}
            <h2 className="text-2xl font-semibold text-gray-800">
               {sold?.puesto}
            </h2>
            <p className="text-md text-grey-dark-ligth mb-4">
               Area de Desarrollo de Software
            </p>

            {/* Descripción */}
            <p className="text-gray-700 mb-4">{sold?.observaciones}</p>

            {/* Detalles */}
            <div className="mb-8 flex flex-col gap-y-4">
               <div className="flex gap-3">
                  <div className="flex justify-center items-center p-2 rounded-md bg-hover-grey w-12 h-12">
                     <img src={Static} />
                  </div>
                  <div>
                     <p className="text-md text-primary font-semibold">
                        Cantidad:
                     </p>
                     <p className="text-md text-grey"> {sold?.cantidad}</p>
                  </div>
               </div>
               <div className="flex gap-3">
                  <div className="flex justify-center items-center p-2 rounded-md bg-hover-grey w-12 h-12">
                     <img src={Time} />
                  </div>
                  <div>
                     <p className="text-md text-primary font-semibold">
                        Fecha:
                     </p>
                     <p className="text-md text-grey">{formatDate}</p>
                  </div>
               </div>
               <div className="flex gap-3">
                  <div>
                     <div className="flex justify-center items-center p-2 rounded-md bg-hover-grey w-12 h-12">
                        <img src={Group} />
                     </div>
                  </div>
                  <div className="w-64">
                     <p className="text-md text-primary font-semibold">
                        Habilidades blandas:
                     </p>
                     <p className="text-md text-grey break-words">
                        {sold?.habilidadesBlandas}
                     </p>
                  </div>
               </div>
               <div className="flex gap-3">
                  <div>
                     <div className="flex justify-center items-center p-2 rounded-md bg-hover-grey w-12 h-12">
                        <img src={Redondo} />
                     </div>
                  </div>
                  <div className="w-64">
                     <p className="text-md text-primary font-semibold">
                        Habilidades técnicas:
                     </p>
                     <p className="text-md text-grey break-words">
                        {sold?.conocimientosTecnicos}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ItemRequest;
