import { useDispatch } from "react-redux";
import Modal from "@/shared/components/Modal";
import { useEffect, useState } from "react";

import Select from "@/shared/components/Select";
import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import { closeModalKanban } from "@/modules/Recruitment/Calls/slices/modalkanbanSlice";
import { useGetPostulanteByIdQuery, useUpdatePostulanteMutation } from "@/modules/Recruitment/Calls/services/postulantes-api";
import { useParams } from "react-router-dom";

type Option = {
   id: number;
   name: string;
};

interface ModalEditPostulanteProps {
   postulanteId: string; // 🔹 Recibe el ID como prop
}

const ModalEditPostulante: React.FC<ModalEditPostulanteProps> = ({
   postulanteId,
}) => {
   const dispatch = useDispatch();

      const { id } = useParams<{ id: string }>();
      const convocatoriaId = Number(id);

   const { data: GetByIdPostulante } = useGetPostulanteByIdQuery(
      Number(postulanteId)
   );
   const [updatePostulante] = useUpdatePostulanteMutation();

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

   useEffect(() => {
      if (GetByIdPostulante) {
         setnombre(GetByIdPostulante?.persona?.nombres || "");
         setapellidoPaterno(GetByIdPostulante?.persona?.apellidoPaterno || "");
         setapellidoMaterno(GetByIdPostulante?.persona?.apellidoMaterno || "");
         setemail(GetByIdPostulante?.persona?.email || "");
         setdni(GetByIdPostulante?.persona?.dni || "");
         setTelefono(GetByIdPostulante?.persona?.telefono || "");
         setinstitucionEducativa(
            GetByIdPostulante?.persona?.institucionEducativa || ""
         );
         setCarrera(GetByIdPostulante?.persona?.carrera || "");
         setDireccion(GetByIdPostulante?.persona?.direccion || "");
         setPais(GetByIdPostulante?.persona?.pais || "");
         setDepartamento(GetByIdPostulante?.persona?.departamento || "");

         const modalidadEncontrada = modalidadOptions.find(
            (option) => option.name === GetByIdPostulante?.modalidadPracticas
         );

         setSelectedModalidad(modalidadEncontrada);
      }
   }, [GetByIdPostulante]);

      const handleUpdate = async () => {
         if (!selectedModalidad) {
            alert("Todos los campos son obligatorios");
            return;
         }
         try {
            await updatePostulante({
               id: Number(postulanteId),
               data: {
                  nombres: nombre,
                  apellidoPaterno: apellidoPaterno,
                  apellidoMaterno: apellidoMaterno,
                  email: email,
                  dni: dni,
                  telefono: telefono,
                  modalidadPracticas: String(selectedModalidad?.name),
                  institucionEducativa: institucionEducativa,
                  carrera: carrera,
                  direccion: direccion,
                  pais: pais,
                  departamento: departamento,
                  convocatoriaId:convocatoriaId,
               },
            }).unwrap();
            dispatch(closeModalKanban());
         } catch (error) {
            console.error("Error al actualizar la entrevista:", error);
         }
      };

   return (
      <Modal
         title="Editar Postulante"
         isOpen={true}
         onClose={() => dispatch(closeModalKanban())}
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
                  onChange={(option) => setSelectedModalidad(option)}
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
            <Button fullWidth={true} onClick={handleUpdate}>Editar</Button>
         </div>
      </Modal>
   );
};

export default ModalEditPostulante;
