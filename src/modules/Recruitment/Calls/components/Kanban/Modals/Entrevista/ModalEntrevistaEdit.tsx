import {
   useGetEntrevistaByIdQuery,
   useUpdateEntrevistaMutation,
} from "@/modules/Recruitment/Calls/services/entrevista-api";
import { closeModalKanban } from "@/modules/Recruitment/Calls/slices/modalkanbanSlice";
import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import Modal from "@/shared/components/Modal";
import Select from "@/shared/components/Select";
import TextArea from "@/shared/components/TextArea";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type Option = {
   id: number;
   name: string;
};

interface ModalEditPostulanteProps {
   postulanteId: string; // 🔹 Recibe el ID como prop
   entrevistaId: number;
}

const ModalEntrevistaEdit: React.FC<ModalEditPostulanteProps> = ({
   postulanteId,
   entrevistaId,
}) => {
   const dispatch = useDispatch();

   const { data: GetByIdEntrevista } = useGetEntrevistaByIdQuery(entrevistaId);
   const [updateEntrevista] = useUpdateEntrevistaMutation();

   const resultOptions: Option[] = [
      { id: 1, name: "Aprobado" },
      { id: 2, name: "Desaprobado" },
   ];

   const getResultOption = (value?: boolean): Option | undefined => {
      return value === true
         ? resultOptions[0] // "Aprobado"
         : value === false
         ? resultOptions[1] // "Desaprobado"
         : undefined;
   };

   const [fecha, setFecha] = useState("");
   const [hora, setHora] = useState("");
   const [comentarios, setComentarios] = useState("");
   const [selectedResult, setSelectedResult] = useState<Option | undefined>(
      undefined
   );

   useEffect(() => {
      if (GetByIdEntrevista) {
         setFecha(GetByIdEntrevista?.fechaEntrevista || "");
         setHora(GetByIdEntrevista?.horaEntrevista || "");
         setComentarios(GetByIdEntrevista?.comentarios || "");
         setSelectedResult(getResultOption(GetByIdEntrevista?.resultado));
      }
   }, [GetByIdEntrevista]);

   const handleResultChange = (option: Option) => {
      setSelectedResult(option);
   };

   const handleUpdate = async () => {
      try {
         const dataToSend: Partial<{
            postulanteId: number;
            fechaEntrevista: string;
            horaEntrevista: string;
            resultado: boolean;
            comentarios: string;
         }> = {
            postulanteId: Number(postulanteId),
            fechaEntrevista: fecha,
            horaEntrevista: hora,
            comentarios: comentarios,
         };

         // Solo agregar "resultado" si el usuario ha seleccionado una opción
         if (selectedResult !== undefined) {
            dataToSend.resultado = selectedResult.id === 1;
         }

         await updateEntrevista({
            id: entrevistaId,
            data: dataToSend,
         }).unwrap();

         dispatch(closeModalKanban());
      } catch (error) {
         console.error("Error al actualizar la entrevista:", error);
      }
   };


   return (
      <Modal
         title="Editar Entrevista"
         isOpen={true}
         onClose={() => dispatch(closeModalKanban())}
      >
         <div className="flex flex-col gap-5">
            <div className="flex gap-5">
               <Input
                  label="Fecha"
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
               />
               <Input
                  label="Hora"
                  placeholder="00:00"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
               />
            </div>
            <Select
               label="Resultado"
               options={resultOptions}
               selected={selectedResult}
               onChange={handleResultChange}
            />
            <TextArea
               label="Observaciones"
               value={comentarios}
               onChange={(e) => setComentarios(e.target.value)}
            />

            <div className="flex gap-5">
               <Button fullWidth={true} onClick={handleUpdate}>
                  Editar
               </Button>
               <Button fullWidth={true} variant="secondary">
                  Descartar
               </Button>
            </div>
         </div>
      </Modal>
   );
};

export default ModalEntrevistaEdit;
