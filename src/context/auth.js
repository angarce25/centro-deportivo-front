import axios from 'axios';


const API = 'http://localhost:3000/api';

export const registerRequest = user => axios.post(`${API}/register`, user);    


//Peticiones CRUD  desde la sesión de usuario
export const getMyPlayersReq = () => axios.get(`${API}/my-players`)
export const createPlayersReq = (player) => axios.post(`${API}/newplayer`, player)

export const getMyOrdersReq = ()=> axios.get(`${API}/myorders`)
