import { closeModalKanban } from "@/modules/Recruitment/Calls/slices/modalkanbanSlice";
import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import Modal from "@/shared/components/Modal";
import { useDispatch } from "react-redux";

const ModalColAdd = () => {
   const dispatch = useDispatch();
   return (
      <Modal
         title="Agregar Colaborador"
         isOpen={true}
         onClose={() => dispatch(closeModalKanban())}
      >
         <div className="grid grid-cols-2 gap-5">
            <Input
               label="Código de colaborador"
               placeholder="Código de colaborador"
            />
            <Input
               label="Líder de área"
               placeholder="Nombre del líder de área"
            />
            <Input label="Inicio de contrato" type="date" />
            <Input label="Fin de contrato" type="date" />
         </div>
         <div className="flex gap-5 mt-6">
            <Button fullWidth={true}>Agregar</Button>
            <Button
               fullWidth={true}
               variant="secondary"
               onClick={() => dispatch(closeModalKanban())}
            >
               Cerrar
            </Button>
         </div>
      </Modal>
   );
};

export default ModalColAdd;
