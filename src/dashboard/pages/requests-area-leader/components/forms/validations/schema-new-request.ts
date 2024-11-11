import { z } from "zod";

export const schema = z.object({
   position: z.string().min(1, "El puesto es obligatorio"),
   quantity: z.string().min(1, "Cantidad inválida"),
   type: z.enum(["Practicante", "Voluntario"]),
   softSkills: z.string().min(1, "Las habilidades blandas son obligatorias"),
   technicalKnowledge: z
      .string()
      .min(1, "Los conocimientos técnicos son obligatorios"),
   functions: z.string().min(1, "Las funciones son obligatorias"),
});

export type FormValues = z.infer<typeof schema>;
