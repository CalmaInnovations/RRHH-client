import { closeModalKanban } from "@/modules/Recruitment/Calls/slices/modalkanbanSlice";
import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import Modal from "@/shared/components/Modal";
import Select from "@/shared/components/Select";
import TextArea from "@/shared/components/TextArea";
import { useState } from "react";
import { useDispatch } from "react-redux";

type Option = {
   id: number;
   name: string;
};
const ModalOnbAdd = () => {
   const dispatch = useDispatch();

   const [selectedCoorOnb, setSelectedCoorOnb] = useState<Option | undefined>(
      undefined
   );

   const modalidadOptions: Option[] = [
      { id: 1, name: "Practicante preprofesional" },
      { id: 2, name: "Practicante profesional" },
   ];

   return (
      <Modal
         title="Agregar Onboarding"
         isOpen={true}
         onClose={() => dispatch(closeModalKanban())}
      >
         <div className="flex flex-col gap-5">
            <Select
               label="Coordinador de Onboarding"
               options={modalidadOptions}
               selected={selectedCoorOnb}
               onChange={setSelectedCoorOnb}
            />
            <div className="flex gap-5">
               <Input label="Fecha" type="date"/>
               <Input label="Hora" placeholder="00:00" />
            </div>

            <Input label="Enlace de Meet" placeholder="Ingresar enlace" />

            <div>
               <p className="text-sm font-medium text-dark">
                  Documentos Onboarding:
               </p>
               <div className="space-y-2 mt-2">
                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-ligth rounded focus:ring-primary"
                     />
                     <span className="text-[14px]">Contrato</span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                     />
                     <span className="text-[14px]">
                        Carta Compromiso Ad Honorem - Prestación de Servicio
                     </span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                     />
                     <span className="text-[14px]">Código de ética</span>
                  </label>
               </div>
            </div>

            <TextArea label="Observaciones" />

            <div className="flex gap-5">
               <Button fullWidth={true}>Agregar</Button>
               <Button fullWidth={true} variant="secondary" onClick={()=>dispatch(closeModalKanban())}>Cerrar</Button>
            </div>
         </div>
      </Modal>
   );
};

export default ModalOnbAdd;
