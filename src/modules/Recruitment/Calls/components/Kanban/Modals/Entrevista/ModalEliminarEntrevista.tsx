import { closeModalKanban } from "@/modules/Recruitment/Calls/slices/modalkanbanSlice";
import Modal from "@/shared/components/Modal";
import { useDispatch } from "react-redux";
import { IoIosWarning } from "react-icons/io";
import Button from "@/shared/components/Button";
import { useDeleteEntrevistaMutation } from "@/modules/Recruitment/Calls/services/entrevista-api";

interface ModalDeleteEntrevistaProps {
   entrevistaId: number;
}

const ModalEliminarEntrevista: React.FC<ModalDeleteEntrevistaProps> = ({
   entrevistaId,
}) => {

   const [deleteEntrevista] = useDeleteEntrevistaMutation();

   const handleDelete = async () => {
      try {
         await deleteEntrevista(entrevistaId).unwrap();
         dispatch(closeModalKanban());
      } catch (error) {
         console.error("Error al eliminar la entrevista:", error);
      }
   };


   const dispatch = useDispatch();
   return (
      <Modal
         title="Eliminar Entrevista"
         isOpen={true}
         onClose={() => dispatch(closeModalKanban())}
      >
         <div className="flex justify-center gap-4">
            <div>
               <IoIosWarning className="text-5xl text-danger" />
            </div>
            <div>
               <p className="text-grey-blue">
                  ¿Estás seguro de eliminar esta entrevista? No podrá
                  recuperarla.
               </p>
            </div>
         </div>
         <div className="flex justify-end gap-5 mt-5">
            <Button onClick={handleDelete}>
               Continuar
            </Button>
            <Button variant="secondary" onClick={()=>dispatch(closeModalKanban())}>
               Cancelar
            </Button>
         </div>
      </Modal>
   );
};

export default ModalEliminarEntrevista;
