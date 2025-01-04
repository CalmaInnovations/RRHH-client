import { z } from "zod";

export const schema = z.object({
   colaboradorLiderId: z.optional(
      z
         .number()
         .min(1, { message: "El ID del líder debe ser un número positivo" })
   ),
   puestoId: z
      .number()
      .min(1, { message: "El ID del puesto debe ser un número positivo" }),
   cantidad: z.coerce.number(),
   habilidadesBlandas: z
      .string()
      .min(1, { message: "Las habilidades blandas son obligatorias" }),
   conocimientosTecnicos: z
      .string()
      .min(1, { message: "Los conocimientos técnicos son obligatorios" }),
   observaciones: z
      .string()
      .min(1, { message: "Las observaciones son obligatorias" }),
   tipoModalidad: z
      .string()
      .min(1, { message: "El tipo de modalidad es obligatorio" }),
   beneficios: z.optional(z.string()),
});

export type FormValues = z.infer<typeof schema>;
