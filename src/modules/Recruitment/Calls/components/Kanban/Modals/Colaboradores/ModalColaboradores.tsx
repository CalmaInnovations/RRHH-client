import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import Modal from "@/shared/components/Modal";
import { closeModalKanban } from "@/modules/Recruitment/Calls/slices/modalkanbanSlice";

interface ModalEditColaboradorProps {
   colaboradorId: string;
}

const schema = yup.object().shape({
   codigo: yup.string().required("El código de colaborador es obligatorio"),
   lider: yup.string().required("El líder de área es obligatorio"),
   inicioContrato: yup
      .string()
      .matches(/^\d{2}\/\d{2}\/\d{2}$/, "Formato inválido (dd/mm/aa)")
      .required("La fecha de inicio es obligatoria"),
   finContrato: yup
      .string()
      .matches(/^\d{2}\/\d{2}\/\d{2}$/, "Formato inválido (dd/mm/aa)")
      .required("La fecha de fin es obligatoria"),
});

const ModalEditColaborador: React.FC<ModalEditColaboradorProps> = () => {
   const dispatch = useDispatch();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
   });

   const onSubmit = (data: any) => {
      console.log("Datos enviados:", data);
   };

   return (
      <Modal title="Editar Colaborador" isOpen={true} onClose={() => dispatch(closeModalKanban())}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 bg-gray-100 rounded-md">
               <div className="mb-4">
                  <p className="font-bold">Nombre completo del postulante</p>
                  <p>Modalidad de prácticas</p>
                  <p>Correo electrónico</p>
                  <p>Departamento, País</p>
                  <p>
                     Documentos: <a href="#" className="text-blue-500">URL</a>
                  </p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                     <label className="text-sm font-medium">Código de colaborador</label>
                     <input
                        type="text"
                        {...register("codigo")}
                        placeholder="Código de colaborador"
                        className="border p-2 rounded-md"
                     />
                     {errors.codigo && <p className="text-red-500 text-sm">{errors.codigo.message}</p>}
                  </div>

                  <div className="flex flex-col">
                     <label className="text-sm font-medium">Líder de área</label>
                     <input
                        type="text"
                        {...register("lider")}
                        placeholder="Nombre del líder de área"
                        className="border p-2 rounded-md"
                     />
                     {errors.lider && <p className="text-red-500 text-sm">{errors.lider.message}</p>}
                  </div>

                  <div className="flex flex-col">
                     <label className="text-sm font-medium">Inicio de contrato</label>
                     <input
                        type="text"
                        {...register("inicioContrato")}
                        placeholder="dd/mm/aa"
                        className="border p-2 rounded-md"
                     />
                     {errors.inicioContrato && <p className="text-red-500 text-sm">{errors.inicioContrato.message}</p>}
                  </div>

                  <div className="flex flex-col">
                     <label className="text-sm font-medium">Fin de contrato</label>
                     <input
                        type="text"
                        {...register("finContrato")}
                        placeholder="dd/mm/aa"
                        className="border p-2 rounded-md"
                     />
                     {errors.finContrato && <p className="text-red-500 text-sm">{errors.finContrato.message}</p>}
                  </div>
               </div>

               <div className="flex justify-between items-center mt-6">
                  <motion.button
                     type="submit"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md transition-all"
                  >
                     Guardar
                  </motion.button>
                  
                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="text-blue-500"
                     onClick={() => dispatch(closeModalKanban())}
                  >
                     Cerrar
                  </motion.button>
               </div>
            </div>
         </form>
      </Modal>
   );
};

export default ModalEditColaborador;
