import { z } from "zod";

export const schema = z.object({
   fecha: z.string({message: "Se espera este campo"}).min(2, "Campo Obligatorio"),
   hora: z.string({message: "Se espera este campo"}).min(2, "Campo Obligatorio"),
   puntaje: z.string().min(1, "Campo Obligatorio"),
   observaciones: z.string().min(5, "Se necesita mas carácteres"),

});

export type FormValues = z.infer<typeof schema>;
