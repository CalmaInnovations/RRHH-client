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
      <div className="bg-white shadow-lg rounded-lg px-10 py-8 mb-6 w-[24rem] h-[38rem]">
         <div className="h-[32rem]">
            {/* Título y Área */}
            <h1>{sold?.puesto}</h1>
            <p className="text-md text-grey-dark-ligth mb-4">
               Área de Desarrollo de Software
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
         {/* Botón para convertir a convocatoria */}
         <Button fullWidth={true} onClick={() => onAssign(sold?.id)}>
            Convertir a convocatoria
         </Button>
      </div>
   );
};

export default ItemRequestRct;
