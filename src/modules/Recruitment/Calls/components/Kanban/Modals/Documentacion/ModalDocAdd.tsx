import { useCreateDocumentationMutation } from "@/modules/Recruitment/Calls/services/documentation-api";
import { closeModalKanban } from "@/modules/Recruitment/Calls/slices/modalkanbanSlice";
import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import Modal from "@/shared/components/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface ModalPostulanteProps {
   postulanteId: string; // 🔹 Recibe el ID como prop
}

const ModalDocAdd : React.FC<ModalPostulanteProps> = ({ postulanteId }) => {
   const dispatch = useDispatch();

   const [createDocumentation] = useCreateDocumentationMutation();

   const [enlace, setenlace] = useState("");
   const [cartaPresentacion, setcartaPresentacion] = useState(false);
   const [cartaConfidencial, setcartaConfidencial] = useState(false);
   const [cartaCompromiso, setcartaCompromiso] = useState(false);
   const [documentDni, setdocumentDni] = useState(false);
   const [cv, setcv] = useState(false);
   const [horarioPracticas, sethorarioPracticas] = useState(false);

      const handleSubmit = async () => {
         try {
            await createDocumentation({
               postulanteId: Number(postulanteId),
               encargadoEnvioDocsId:1,
               fechaEnvioDocs:new Date().toISOString().split('T')[0], // fecha actual en formato YYYY-MM-DD
               legajoUrl:enlace,
               cartaPresentacion:cartaPresentacion,
               cartaConfidencialidad:cartaConfidencial,
               cartaCompromiso:cartaCompromiso,
               documentoDNI:documentDni,
               documentoCV:cv,
               documentoHorarioPracticas:horarioPracticas,

            }).unwrap();

            alert("Documentacion creado exitosamente");
            dispatch(closeModalKanban()); // cierra el modal
         } catch (error) {
            console.error("Error al crear la Documentacion:", error);
            alert("Error al crear la Documentacion");
         }
      };

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
               value={enlace}
               onChange={(e) => setenlace(e.target.value)}
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
                        checked={cartaPresentacion}
                        onChange={(e) => setcartaPresentacion(e.target.checked)}
                     />
                     <span className="text-[14px]">Carta de Presentación</span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                        checked={cartaConfidencial}
                        onChange={(e) => setcartaConfidencial(e.target.checked)}
                     />
                     <span className="text-[14px]">
                        Carta de Confidencialidad y No Divulgación
                     </span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                        checked={cartaCompromiso}
                        onChange={(e) => setcartaCompromiso(e.target.checked)}
                     />
                     <span className="text-[14px]">
                        Carta de Compromiso - Profesionales y Voluntarios
                     </span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                        checked={documentDni}
                        onChange={(e) => setdocumentDni(e.target.checked)}
                     />
                     <span className="text-[14px]">Documento de Identidad</span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                        checked={cv}
                        onChange={(e) => setcv(e.target.checked)}
                     />
                     <span className="text-[14px]">CV Actualizado</span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                        checked={horarioPracticas}
                        onChange={(e) => sethorarioPracticas(e.target.checked)}
                     />
                     <span className="text-[14px]">Horario de prácticas</span>
                  </label>
               </div>
            </div>

            <div className="flex gap-5">
               <Button fullWidth={true} onClick={handleSubmit}>Agregar</Button>
               <Button fullWidth={true} variant="secondary">
                  Cancelar
               </Button>
            </div>
         </div>
      </Modal>
   );
};

export default ModalDocAdd;
