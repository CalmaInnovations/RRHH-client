import { closeModalKanban } from "@/modules/Recruitment/Calls/slices/modalkanbanSlice";
import Button from "@/shared/components/Button";
import Modal from "@/shared/components/Modal";
import { useDispatch } from "react-redux";
import { IoIosWarning } from "react-icons/io";
import { useDeletePostulanteMutation } from "@/modules/Recruitment/Calls/services/postulantes-api";

interface ModalDeleteEntrevistaProps {
   postulanteId: string;
}

const ModalEliminarPostulante: React.FC<ModalDeleteEntrevistaProps> = ({
   postulanteId,
}) => {
   const [deletePostulante] = useDeletePostulanteMutation();
   const dispatch = useDispatch();

   const handleDelete = async () => {
      try {
         await deletePostulante(Number(postulanteId)).unwrap();
         dispatch(closeModalKanban());
      } catch (error) {
         console.error("Error al eliminar al postulante:", error);
      }
   };
   return (
      <Modal
         title="Eliminar Postulante"
         isOpen={true}
         onClose={() => dispatch(closeModalKanban())}
      >
         <div className="flex justify-center gap-4">
            <div>
               <IoIosWarning className="text-5xl text-danger" />
            </div>
            <div>
               <p className="text-grey-blue">
                  ¿Estás seguro de eliminar al Postulante? No podrá recuperarlo.
               </p>
            </div>
         </div>
         <div className="flex justify-end gap-5 mt-5">
            <Button onClick={handleDelete}>Continuar</Button>
            <Button
               variant="secondary"
               onClick={() => dispatch(closeModalKanban())}
            >
               Cancelar
            </Button>
         </div>
      </Modal>
   );
};

export default ModalEliminarPostulante;
