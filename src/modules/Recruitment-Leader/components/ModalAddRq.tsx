import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../shared/slices/modalSlice";
import Modal from "../../../shared/components/Modal";
import { RootState } from "../../../app/store";
import Input from "../../../shared/components/Input";
import Select from "../../../shared/components/Select";
import { useGetPositionsQuery } from "../../Position/services/position-api";
import Button from "../../../shared/components/Button";
import { useCreateSolicitudMutation } from "../services/request-api";

type Option = {
   id: number;
   name: string;
};

const ModalAddRq = () => {
   const dispatch = useDispatch();
   const activeModal = useSelector(
      (state: RootState) => state.modal.activeModal
   );

   const [selectedPosition, setSelectedPosition] = useState<Option | undefined>(
      undefined
   );
   const [selectedModalidad, setSelectedModalidad] = useState<
      Option | undefined
   >(undefined);

   const [cantidad, setCantidad] = useState<number>(0);
   const [habilidades, setHabilidades] = useState("");
   const [conocimientos, setConocimientos] = useState("");

   const { data } = useGetPositionsQuery();
   const [createSolicitud] = useCreateSolicitudMutation();

   const modalidadOptions: Option[] = [
      { id: 1, name: "Prácticas" },
      { id: 2, name: "Voluntariado" },
   ];

   const positions =
      data?.puestos.map((p) => ({
         id: p.id,
         name: p.nombre,
      })) || [];

   const handleSubmit = async () => {
      if (!selectedPosition || !selectedModalidad || !cantidad) {
         alert("Todos los campos son obligatorios");
         return;
      }

      try {
         await createSolicitud({
            puestoId: selectedPosition.id,
            cantidad: cantidad,
            habilidadesBlandas: habilidades,
            conocimientosTecnicos: conocimientos,
            tipoModalidad: selectedModalidad.name,
         }).unwrap();

         alert("Solicitud enviada exitosamente");
         dispatch(closeModal()); // cierra el modal
      } catch (error) {
         console.error("Error al enviar solicitud:", error);
         alert("Error al enviar solicitud");
      }
   };

   return (
      <Modal
         isOpen={activeModal === "ModalAddRq"}
         onClose={() => dispatch(closeModal())}
         title="Crear Solicitud"
      >
         <Select
            label="Nombre del puesto"
            options={positions}
            selected={selectedPosition}
            onChange={setSelectedPosition}
         />

         <div className="grid grid-cols-2 gap-2 mt-4">
            <Input
               label="Cantidad"
               type="number"
               placeholder="0"
               value={cantidad}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCantidad(Number(e.target.value))
               }
            />

            <Select
               label="Tipo de modalidad"
               options={modalidadOptions}
               selected={selectedModalidad}
               onChange={setSelectedModalidad}
            />
         </div>

         <div className="grid grid-cols-2 gap-2 mt-4">
            <Input
               label="Habilidades blandas"
               type="text"
               placeholder="Separar por comas (,)"
               value={habilidades}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setHabilidades(e.target.value)
               }
            />
            <Input
               label="Conocimientos técnicos"
               type="text"
               placeholder="Separar por comas (,)"
               value={conocimientos}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConocimientos(e.target.value)
               }
            />
         </div>

         <div className="flex justify-end gap-2 mt-10">
            <Button variant="secondary" onClick={() => dispatch(closeModal())}>
               Cancelar
            </Button>
            <Button onClick={handleSubmit}>Solicitar</Button>
         </div>
      </Modal>
   );
};

export default ModalAddRq;
