import { z } from "zod";

export const schema = z.object({
   position: z.string().min(1, "El puesto es obligatorio"),
   quantity: z.coerce.number().int().gte(0).lte(40),
   type: z.enum(["Practicante", "Voluntario"]),
   softSkills: z.string().min(1, "Las habilidades blandas son obligatorias"),
   technicalKnowledge: z
      .string()
      .min(1, "Los conocimientos técnicos son obligatorios"),
   functions: z.string().min(1, "Las funciones son obligatorias"),
});

export type FormValues = z.infer<typeof schema>;
