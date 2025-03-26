import { RootState } from "@/app/store";
import Button from "@/shared/components/Button";
import Modal from "@/shared/components/Modal";
import { closeModal } from "@/shared/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoIosWarning } from "react-icons/io";

const ModalDeleteAttendace = () => {
   const dispatch = useDispatch();
   const activeModal = useSelector(
      (state: RootState) => state.modal.activeModal
   );
   return (
      <Modal
         title="Eliminar Horario"
         isOpen={activeModal === "ModalDeletetAttend"}
         onClose={() => dispatch(closeModal())}
      >
         <div className="flex justify-center gap-4">
            <div>
               <IoIosWarning className="text-5xl text-danger" />
            </div>
            <div>
               <p className="text-grey-blue">
                  ¿Estás seguro de eliminar este horario? No podrá
                  recuperarla.
               </p>
            </div>
         </div>
         <div className="flex justify-end gap-5 mt-5">
            <Button>
               Continuar
            </Button>
            <Button variant="secondary" onClick={()=>dispatch(closeModal())}>
               Cancelar
            </Button>
         </div>
      </Modal>
   );
};

export default ModalDeleteAttendace;
