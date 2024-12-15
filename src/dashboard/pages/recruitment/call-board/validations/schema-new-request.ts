import { z } from "zod";

export const schema = z.object({
   nombres: z.string().min(2, "Campo Obligatorio"),
   apellidoPaterno: z.string().min(2, "Campo Obligatorio"),
   apellidoMaterno: z.string().min(2, "Campo Obligatorio"),
   email: z.string().min(1, "Campo Obligatorio").email("Correo inválido"),
   dni: z.string().length(8, "Debe tener 8 dígitos"),
   telefono: z.string().min(1, "Campo Obligatorio"),
   institucionEducativa: z.string().min(1, "Campo Obligatorio"),
   carrera: z.string().min(1, "Campo Obligatorio"),
   modalidad: z.enum(["Practicante preprofesional", "Practicante profesional"], {
      required_error: "La modalidad es requerida",
      invalid_type_error: "Elegir uno de estos valores",
   }),
   direccion: z.string().min(1, "Campo Obligatorio"),
   pais: z.string().min(1, "Campo Obligatorio"),
   departamento: z.string().min(1, "Campo Obligatorio"),
   cvUrl: z.string().url("Debe ser una URL válida"),
   // Opcionales
   convocatoriaId: z.number().optional(),
   linkedinUrl: z.string().url("Debe ser una URL válida").optional(),
   cartaRecomendacion: z.string().url("Debe ser una URL válida").optional(),
   fotoUrl: z.string().url("Debe ser una URL válida").optional(),
   fechaNacimiento: z.string().optional(),
});

export type FormValues = z.infer<typeof schema>;
