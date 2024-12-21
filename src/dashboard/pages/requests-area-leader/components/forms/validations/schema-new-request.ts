import { z } from "zod";

export const schema = z.object({
   position: z.string().min(1, "El puesto es obligatorio"),
   quantity: z.coerce.number().int().gte(1, "La cantidad debe ser al menos 1")
   .lte(10, "La cantidad no puede ser mayor a 10"),
   type: z.enum(["Practicante", "Voluntario"], {
      errorMap: () => ({ message: "El tipo de puesto es obligatorio" }),
   }),
   softSkills: z
   .string()
   .min(1, "Las habilidades blandas son obligatorias")
   .regex(/^[a-zA-Z\s,]+$/, "No se permiten caracteres especiales en habilidades blandas"),
   technicalKnowledge: z
   .string()
   .min(1, "Los conocimientos técnicos son obligatorios")
   .regex(/^[a-zA-Z\s,]+$/, "No se permiten caracteres especiales en conocimientos técnicos"),
   functions: z
      .string()
      .min(1, "Las funciones son obligatorias")
      .regex(/^[a-zA-Z\s,]+$/, "No se permiten caracteres especiales en funciones"),
});

export type FormValues = z.infer<typeof schema>;
