import { closeModalKanban } from "@/modules/Recruitment/Calls/slices/modalkanbanSlice";
import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import Modal from "@/shared/components/Modal";
import { useDispatch } from "react-redux";

const ModalDocAdd = () => {
   const dispatch = useDispatch();
   return (
      <Modal
         title="Agregar Documentacion"
         isOpen={true}
         onClose={() => dispatch(closeModalKanban())}
      >
         <div className="flex flex-col gap-5">
            <Input
               label="Enlace de documentos"
               placeholder="Añadir URL  de documentos"
            />

            <div>
               <p className="text-sm font-medium text-dark">
                  Selecciona documentos:
               </p>
               <div className="space-y-2 mt-2">
                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-ligth rounded focus:ring-primary"
                     />
                     <span className="text-[14px]">Carta de Presentación</span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                     />
                     <span className="text-[14px]">
                        Carta de Confidencialidad y No Divulgación
                     </span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                     />
                     <span className="text-[14px]">
                        Carta de Compromiso - Profesionales y Voluntarios
                     </span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                     />
                     <span className="text-[14px]">Documento de Identidad</span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                     />
                     <span className="text-[14px]">CV Actualizado</span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                     />
                     <span className="text-[14px]">Horario de prácticas</span>
                  </label>
               </div>
            </div>

            <div className="flex gap-5">
               <Button fullWidth={true}>Agregar</Button>
               <Button fullWidth={true} variant="secondary">
                  Descartar
               </Button>
            </div>
         </div>
      </Modal>
   );
};

export default ModalDocAdd;
