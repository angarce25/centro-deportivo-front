import axios from 'axios';

const API = 'http://localhost:3000/api';

export const registerRequest = user => axios.post(`${API}/register`, user);

export const loginRequest = user => axios.post(`${API}/login`, user);

//Peticiones CRUD  desde la sesión de usuario
export const getMyPlayersReq = () => axios.get(`${API}/myplayers`)
export const createPlayersReq = (player) => axios.post('/dashboard/form-player', player)