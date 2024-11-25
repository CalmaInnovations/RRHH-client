import axios from 'axios';
import { environment } from './environment';

export const clientAxios = axios.create({
	baseURL: `${environment.API_MASTER}`,
});

export default clientAxios;
