import clientAxios from "../../../../../config/client-axios"
import { CallRes } from "../interfaces/calls-interface";

export const getCallsService = async () => {
   const { data } = await clientAxios.get<CallRes>('api/Convocatoria')
   return data;
}
