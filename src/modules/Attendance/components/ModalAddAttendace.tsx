import { RootState } from "@/app/store";
import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import Modal from "@/shared/components/Modal";
import { closeModal } from "@/shared/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const ModalAddAttendace = () => {
   const dispatch = useDispatch();
   const activeModal = useSelector(
      (state: RootState) => state.modal.activeModal
   );
   return (
      <Modal
         title="Agregar Horario"
         isOpen={activeModal === "ModalAddAttend"}
         onClose={() => dispatch(closeModal())}
      >
         <div>
            <div className="flex gap-4 mb-5">
               <Input label="Horario de Entrada" />
               <Input label="Horario de Salida" />
            </div>
            <Button fullWidth>Agregar</Button>
         </div>
      </Modal>
   );
};

export default ModalAddAttendace;
