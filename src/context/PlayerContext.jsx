import { createContext, useContext, useState, useEffect } from "react";
import { getMyPlayersReq, createPlayersReq} from '../api/auth.js'
import axios from 'axios';

const PlayerContext = createContext();

export const usePlayers = () => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error("usePlayers must be used within a PlayerProvider");
    }
    return context;
}

export function PlayerProvider({ children }) {
    const [myPlayers, setMyPlayers] = useState([]);

    const getMyPlayers = async () =>{
        try{
            const res = await getMyPlayersReq ();
            setMyPlayers(res.data)
        }catch(error){
            console.error(error);
        }   
    };
    


    const createPlayer = async (player) => {
        const res = await createPlayersReq (player)
        console.log(res)
    }
     

    // useEffect(() => {
    //     const fetchPlayers = async () => {
    //         const apiUrl = import.meta.env.VITE_API_URL;
    //         const extraPath = '/my-players';
    //         const fullUrl = apiUrl + extraPath;

    //         try {
    //             const response = await axios.get(fullUrl, {
    //                 withCredentials: true // Asegúrate de que las cookies se envíen con la solicitud
    //             });
    //             setMyPlayers(response.data);
                
    //             // Loguear el nombre del usuario creador
    //             response.data.forEach(player => {
    //                 console.log(`Jugador: ${player.name}, Creado por: ${player.parent_id?.name} ${player.parent_id?.lastname}`);
    //             });
    //         } catch (error) {
    //             console.error("Error al obtener tus jugadores:", error);
    //         }
    //     };

    //     fetchPlayers();
    // }, []);

    return (
        <PlayerContext.Provider 
        value={{
             myPlayers,
             getMyPlayers,
             createPlayer
             }}
             >
            {children}
        </PlayerContext.Provider>
    );
}
