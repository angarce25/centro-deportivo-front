import { createContext, useContext, useState } from "react";
import { getMyPlayersReq, createPlayersReq} from './auth.js'

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
        try {
            console.log("Creating player:", player); // Log para verificar los datos del jugador
            const res = await createPlayersReq(player);
            console.log("Player created:", res.data); // Log para verificar la respuesta de la API
            setMyPlayers(prevPlayers => [...prevPlayers, res.data]);
        } catch (error) {
            console.error("Error al crear el jugador:", error);
        }
    };

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
