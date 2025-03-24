import { useGetColaboradoresOnboardingQuery } from "@/modules/Recruitment/Calls/services/onboarding-api";
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


interface ModalPostulanteProps {
   postulanteId: string; // 🔹 Recibe el ID como prop
}


const ModalOnbAdd : React.FC<ModalPostulanteProps> = ({
   postulanteId,
}) => {
   const dispatch = useDispatch();

   const { data } = useGetColaboradoresOnboardingQuery();

   const [selectedCoorOnb, setSelectedCoorOnb] = useState<Option | undefined>(
      undefined
   );

   const OnboardingColaboradores =
      data?.map((o) => ({
         id: o.id,
         name: o.nombreCompleto,
      })) || [];

   return (
      <Modal
         title="Agregar Onboarding"
         isOpen={true}
         onClose={() => dispatch(closeModalKanban())}
      >

         {postulanteId}
         <div className="flex flex-col gap-5">
            <Select
               label="Coordinador de Onboarding"
               options={OnboardingColaboradores}
               selected={selectedCoorOnb}
               onChange={setSelectedCoorOnb}
            />
            <div className="flex gap-5">
               <Input label="Fecha" type="date" />
               <Input label="Hora" placeholder="00:00" />
            </div>

            <Input label="Enlace de Meet" placeholder="Ingresar enlace" />

            <TextArea label="Observaciones" />

            <div className="flex gap-5">
               <Button fullWidth={true}>Agregar</Button>
               <Button
                  fullWidth={true}
                  variant="secondary"
                  onClick={() => dispatch(closeModalKanban())}
               >
                  Cerrar
               </Button>
            </div>
         </div>
      </Modal>
   );
};

export default ModalOnbAdd;
