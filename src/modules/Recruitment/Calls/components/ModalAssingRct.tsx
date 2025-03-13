import { useState } from "react";
import Modal from "../../../../shared/components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { closeModal } from "../../../../shared/slices/modalSlice";
import Select from "../../../../shared/components/Select";
import { useGetReclutadoresAvbQuery } from "../services/calls-api";
import Button from "../../../../shared/components/Button";
import { useConvertirSolicitudMutation } from "../../Request-recruiter/services/requestRct-api";

type Option = {
  id: number;
  name: string;
};

const ModalAssingRct = ({ solicitudId }: { solicitudId: number }) => {
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.modal.activeModal
  );

  const { data } = useGetReclutadoresAvbQuery();
  const [convertirSolicitud] = useConvertirSolicitudMutation();

  const [selectedTypeRct, setSelectedTypeRct] = useState<Option | undefined>(
    undefined
  );

  const [selectedRecruiter, setSelectedRecruiter] = useState<
    Option | undefined
  >(undefined);

  const typeReclutadorOptions: Option[] = [
    { id: 1, name: "Reclutador Senior" },
    { id: 2, name: "Reclutador General" },
  ];

  // funcion para filtrar los reclutadores segun el tipo seleccionado
  const recruiterOptions: Option[] =
    selectedTypeRct?.id === 1
      ? data?.reclutadoresSenior.map((r) => ({ id: r.id, name: r.nombre })) ||
        []
      : selectedTypeRct?.id === 2
      ? data?.reclutadoresGeneral.map((r) => ({ id: r.id, name: r.nombre })) ||
        []
      : [];

  const handleAsignar = async () => {
    if (!selectedRecruiter) return;

    try {
      await convertirSolicitud({
        id: solicitudId,
        reclutadorId: selectedRecruiter.id,
      }).unwrap();

      dispatch(closeModal());
    } catch (error) {
      console.error("Error al asignar reclutador:", error);
    }
  };

  return (
    <Modal
      isOpen={activeModal === "ModalAsingRCT"}
      onClose={() => dispatch(closeModal())}
      title="Asignar Reclutador"
    >
      <div className="mb-10 flex flex-col gap-y-4">
        <Select
          label="Selecciona un tipo de reclutador"
          options={typeReclutadorOptions}
          selected={selectedTypeRct}
          onChange={(option) => {
            setSelectedTypeRct(option);
            setSelectedRecruiter(undefined);
          }}
        />

        <Select
          label="Selecciona un reclutador"
          options={recruiterOptions}
          selected={selectedRecruiter}
          onChange={setSelectedRecruiter}
          disabled={!selectedTypeRct}
        />
      </div>

      <Button fullWidth={true} onClick={handleAsignar}>Asignar</Button>
    </Modal>
  );
};

export default ModalAssingRct;
