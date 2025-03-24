import {
   useGetColaboradoresOnboardingQuery,
   useGetOnboardingByIdQuery,
   useUpdateOnboardingMutation,
} from "@/modules/Recruitment/Calls/services/onboarding-api";
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

interface ModalPostulanteProps {
   postulanteId: string; // 🔹 Recibe el ID como prop
}
const ModalEditOnb: React.FC<ModalPostulanteProps> = ({ postulanteId }) => {
   const dispatch = useDispatch();

   const { data: GetByIdOnboarding } = useGetOnboardingByIdQuery(
      Number(postulanteId)
   );
   const [updateOnboarding] = useUpdateOnboardingMutation();
   const { data } = useGetColaboradoresOnboardingQuery();

   const [enlace, setenlace] = useState("");
   const [observacion, setobservacion] = useState("");
   const [selectedCoorOnb, setSelectedCoorOnb] = useState<Option | undefined>(
      undefined
   );

   const [induccion, setinduccion] = useState(false)
   const [contrato, setContrato] = useState(false);
   const [cartaCompromiso, setCartaCompromiso] = useState(false);
   const [codigoEtica, setCodigoEtica] = useState(false);

   const OnboardingColaboradores =
      data?.map((o) => ({
         id: o.id,
         name: o.nombreCompleto,
      })) || [];

   useEffect(() => {
      if (GetByIdOnboarding) {
         setenlace(GetByIdOnboarding?.linkMeet);
         setobservacion(GetByIdOnboarding?.observaciones);

         setinduccion(GetByIdOnboarding?.realizoInduccion)
         setContrato(GetByIdOnboarding?.contrato);
         setCartaCompromiso(GetByIdOnboarding?.cartaCompromiso);
         setCodigoEtica(GetByIdOnboarding?.codigoEtica);

         const encargado = OnboardingColaboradores.find(
            (o) => o?.id == GetByIdOnboarding?.encargadoId
         );
         setSelectedCoorOnb(encargado);
      }
   }, [GetByIdOnboarding]);

   const handleUpdate = async () => {
      if (!selectedCoorOnb) {
         alert("Todos los campos son obligatorios");
         return;
      }
      try {
         const dataToSend: Partial<{
            postulanteId: number;
            encargadoId: number;
            // fechaHoraInduccion: string;
            realizoInduccion: boolean;
            contrato: boolean;
            cartaCompromiso: boolean;
            codigoEtica: boolean;
            linkMeet: string;
            observaciones: string;
         }> = {
            postulanteId: Number(postulanteId),
            encargadoId: selectedCoorOnb.id,
            realizoInduccion:induccion,
            contrato: contrato,
            cartaCompromiso: cartaCompromiso,
            codigoEtica: codigoEtica,
            linkMeet: enlace,
            observaciones: observacion,
         };

         await updateOnboarding({
            id: Number(postulanteId),
            data: dataToSend,
         }).unwrap();
         alert("Se actualizo el onboarding");
         dispatch(closeModalKanban());
      } catch (error) {
         console.error("Error al actualizar el onboarding:", error);
      }
   };

   return (
      <Modal
         title="Editar Onboarding"
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

            <Input
               label="Enlace de Meet"
               placeholder="Ingresar enlace"
               value={enlace}
               onChange={(e) => setenlace(e.target.value)}
            />
            <div>
               <p className="text-sm font-medium text-dark mb-2">Induccion:</p>
               <label className="flex items-center space-x-3  text-gray-900">
                  <input
                     type="checkbox"
                     className="w-4 h-4 text-primary border-b-grey-dark-ligth rounded focus:ring-primary"
                     checked={induccion}
                     onChange={(e) => setinduccion(e.target.checked)}
                  />
                  <span className="text-[14px]">Realizo la Induccion?</span>
               </label>
            </div>

            <div>
               <p className="text-sm font-medium text-dark">
                  Documentos Onboarding:
               </p>
               <div className="space-y-2 mt-2">
                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-ligth rounded focus:ring-primary"
                        checked={contrato}
                        onChange={(e) => setContrato(e.target.checked)}
                     />
                     <span className="text-[14px]">Contrato</span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                        checked={cartaCompromiso}
                        onChange={(e) => setCartaCompromiso(e.target.checked)}
                     />
                     <span className="text-[14px]">
                        Carta Compromiso Ad Honorem - Prestación de Servicio
                     </span>
                  </label>

                  <label className="flex items-center space-x-3 text-gray-900">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-b-grey-dark-lig rounded focus:ring-primary"
                        checked={codigoEtica}
                        onChange={(e) => setCodigoEtica(e.target.checked)}
                     />
                     <span className="text-[14px]">Código de ética</span>
                  </label>
               </div>
            </div>

            <TextArea
               label="Observaciones"
               value={observacion}
               onChange={(e) => setobservacion(e.target.value)}
            />

            <div className="flex gap-5">
               <Button fullWidth={true} onClick={handleUpdate}>
                  Editar
               </Button>
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

export default ModalEditOnb;
