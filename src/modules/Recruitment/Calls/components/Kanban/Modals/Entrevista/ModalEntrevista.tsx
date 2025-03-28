import { useCreateEntrevistaMutation } from "@/modules/Recruitment/Calls/services/entrevista-api";
import { closeModalKanban } from "@/modules/Recruitment/Calls/slices/modalkanbanSlice";
import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import Modal from "@/shared/components/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";


interface ModalEditPostulanteProps {
   postulanteId: string; // 🔹 Recibe el ID como prop
}

const ModalEntrevista: React.FC<ModalEditPostulanteProps> = ({
   postulanteId,
}) => {
   const dispatch = useDispatch();

   const [fecha, setfecha] = useState("");
   const [hora, sethora] = useState("");



   const [createEntrevista] = useCreateEntrevistaMutation();



   const handleSubmit = async () => {
      try {
         await createEntrevista({
            postulanteId: Number(postulanteId),
            fechaEntrevista: fecha,
            horaEntrevista: hora,
         }).unwrap();

         alert("Entrevista creado exitosamente");
         dispatch(closeModalKanban()); // cierra el modal
      } catch (error) {
         console.error("Error al crear la Entrevista:", error);
         alert("Error al crear la Entrevista");
      }
   };

   return (
      <Modal
         title="Agregar Entrevista"
         isOpen={true}
         onClose={() => dispatch(closeModalKanban())}
      >
         <div className="flex flex-col gap-5">
            <div className="flex gap-5">
               <Input
                  label="Fecha"
                  type="date"
                  value={fecha}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setfecha(e.target.value)
                  }
               />
               <Input
                  label="Hora"
                  placeholder="00:00"
                  value={hora}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     sethora(e.target.value)
                  }
               />
            </div>


            <div className="flex gap-5">
               <Button fullWidth={true} onClick={handleSubmit}>
                  Agregar
               </Button>
               <Button fullWidth={true} variant="secondary">
                  Descartar
               </Button>
            </div>
         </div>
      </Modal>
   );
};

export default ModalEntrevista;
