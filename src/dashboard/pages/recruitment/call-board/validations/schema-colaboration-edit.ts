import { z } from "zod";

export const schema = z.object({
   nombres: z.string().min(2, "Campo Obligatorio"),
   puesto: z.string().min(2, "Campo Obligatorio"),
   dni: z.string().min(2, "Campo Obligatorio"),
   area: z.string().min(2, "Campo Obligatorio"),
   celular: z.string().min(2, "Campo Obligatorio"),
   fecha: z.string().min(2, "Campo Obligatorio"),
   hora: z.string().min(2, "Campo Obligatorio"),
   genero: z.string().min(2, "Campo Obligatorio"),

});

export type FormValues = z.infer<typeof schema>;
