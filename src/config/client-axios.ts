import axios from 'axios';
import { environment } from './environment';

export const clientAxios = axios.create({
   headers: {
      "Content-Type": "application/json", // Tipo de contenido predeterminado
    },
	baseURL: `${environment.API_MASTER}`,
});

export default clientAxios;
