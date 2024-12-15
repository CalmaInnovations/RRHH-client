import { z } from "zod";

export const schema = z.object({
   coordinador: z.string().min(2, "Campo Obligatorio"),
   enlace_meet: z.string().min(2, "Campo Obligatorio"),
   fecha: z.string().min(2, "Campo Obligatorio"),
   hora: z.string().min(2, "Campo Obligatorio"),
   observaciones: z.string().min(2, "Campo Obligatorio"),

});

export type FormValues = z.infer<typeof schema>;
