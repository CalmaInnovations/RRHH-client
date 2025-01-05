import { z } from "zod";

export const schema = z.object({
   area: z.optional(z.number().min(1, { message: "Debe seleccionar un area" })),
   subArea: z.optional(
      z.number().min(1, { message: "Debe seleccionar una sub area" })
   ),
   colaboradorLiderId: z.optional(
      z
         .number()
         .min(1, { message: "El ID del líder debe ser un número positivo" })
   ),
   puestoId: z.number().min(1, { message: "Debe seleecionar un puesto" }),
   cantidad: z.coerce
      .number()
      .min(1, { message: "Cantidad debe ser mayor a 0" }),
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
