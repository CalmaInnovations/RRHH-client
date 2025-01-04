import { z } from "zod";

export const schema = z.object({
   colaboradorLiderId: z
      .number()
      .min(1, { message: "El ID del líder debe ser un número positivo" }),
   puestoId: z
      .number()
      .min(1, { message: "El ID del puesto debe ser un número positivo" }),
   cantidad: z
      .number()
      .min(0, { message: "La cantidad debe ser un número no negativo" }),
   habilidadesBlandas: z
      .string()
      .min(1, { message: "Las habilidades blandas son obligatorias" }),
   conocimientosTecnicos: z
      .string()
      .min(1, { message: "Los conocimientos técnicos son obligatorios" }),
   tipoModalidad: z
      .string()
      .min(1, { message: "El tipo de modalidad es obligatorio" }),
   observaciones: z
      .string()
      .min(1, { message: "Las observaciones son obligatorias" }),
   beneficios: z
      .string()
      .min(1, { message: "Los beneficios son obligatorios" }),
});

export type FormValues = z.infer<typeof schema>;
