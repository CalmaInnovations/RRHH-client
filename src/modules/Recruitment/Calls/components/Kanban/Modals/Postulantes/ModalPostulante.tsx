import { RootState } from "@/app/store";
import { useCreatePostulanteMutation } from "@/modules/Recruitment/Calls/services/postulantes-api";
import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import Modal from "@/shared/components/Modal";
import Select from "@/shared/components/Select";
import { closeModal } from "@/shared/slices/modalSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Option = {
   id: number;
   name: string;
};
interface ModalPostulanteProps {
   convocatoriaId: number;
}

const ModalPostulante: React.FC<ModalPostulanteProps> = ({
   convocatoriaId,
}) => {
   const dispatch = useDispatch();
   const activeModal = useSelector(
      (state: RootState) => state.modal.activeModal
   );

   const [nombre, setnombre] = useState("");
   const [apellidoPaterno, setapellidoPaterno] = useState("");
   const [apellidoMaterno, setapellidoMaterno] = useState("");
   const [email, setemail] = useState("");
   const [dni, setdni] = useState("");
   const [telefono, setTelefono] = useState("");
   const [institucionEducativa, setinstitucionEducativa] = useState("");
   const [carrera, setCarrera] = useState("");
   const [direccion, setDireccion] = useState("");
   const [pais, setPais] = useState("");
   const [departamento, setDepartamento] = useState("");

   const [selectedModalidad, setSelectedModalidad] = useState<
      Option | undefined
   >(undefined);

   const modalidadOptions: Option[] = [
      { id: 1, name: "Practicante preprofesional" },
      { id: 2, name: "Practicante profesional" },
   ];

   const [createPostulante] = useCreatePostulanteMutation();

   const handleSubmit = async () => {
      if (!selectedModalidad) {
         alert("Todos los campos son obligatorios");
         return;
      }

      try {
         await createPostulante({
            nombres: nombre,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            email: email,
            dni: dni,
            telefono: telefono,
            modalidadPracticas: selectedModalidad.name,
            institucionEducativa: institucionEducativa,
            carrera: carrera,
            direccion: direccion,
            pais: pais,
            departamento: departamento,
            convocatoriaId: convocatoriaId,
         }).unwrap();

         alert("Postulante creado exitosamente");
         dispatch(closeModal()); // cierra el modal
      } catch (error) {
         console.error("Error al crear Postulante:", error);
         alert("Error al crear Postulante");
      }
   };

   return (
      <Modal
         title="Añadir Postulante"
         isOpen={activeModal === "ModalPostulante"}
         onClose={() => dispatch(closeModal())}
      >
         <div>
            <div className="grid grid-cols-2 gap-5 mb-5">
               <Input
                  label="Nombres"
                  placeholder="Nombre(s)"
                  type="text"
                  value={nombre}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setnombre(e.target.value)
                  }
               />
               <Input
                  label="Apellido Paterno"
                  placeholder="Apellido Paterno"
                  type="text"
                  value={apellidoPaterno}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setapellidoPaterno(e.target.value)
                  }
               />
               <Input
                  label="Apellido Materno"
                  placeholder="Apellido materno"
                  type="text"
                  value={apellidoMaterno}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setapellidoMaterno(e.target.value)
                  }
               />
               <Input
                  label="Correo electrónico"
                  placeholder="Correo electrónico"
                  type="text"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setemail(e.target.value)
                  }
               />
               <Input
                  label="Documento de identidad"
                  placeholder="Número de DNI"
                  type="text"
                  value={dni}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setdni(e.target.value)
                  }
               />
               <Input
                  label="Teléfono"
                  placeholder="(+00) 000000000"
                  type="text"
                  value={telefono}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setTelefono(e.target.value)
                  }
               />

               <Select
                  label="Tipo de modalidad"
                  options={modalidadOptions}
                  selected={selectedModalidad}
                  onChange={setSelectedModalidad}
               />
               <Input
                  label="Institución educativa"
                  placeholder="Institución educativa"
                  type="text"
                  value={institucionEducativa}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setinstitucionEducativa(e.target.value)
                  }
               />
               <Input
                  label="Carrera"
                  placeholder="Carrera"
                  type="text"
                  value={carrera}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setCarrera(e.target.value)
                  }
               />
               <Input
                  label="Dirección"
                  placeholder="Dirección"
                  type="text"
                  value={direccion}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setDireccion(e.target.value)
                  }
               />
               <Input
                  label="País"
                  placeholder="País"
                  type="text"
                  value={pais}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setPais(e.target.value)
                  }
               />
               <Input
                  label="Departamento"
                  placeholder="Departamento"
                  type="text"
                  value={departamento}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setDepartamento(e.target.value)
                  }
               />
            </div>
            <Button fullWidth={true} onClick={handleSubmit}>
               Agregar
            </Button>
         </div>
      </Modal>
   );
};

export default ModalPostulante;
