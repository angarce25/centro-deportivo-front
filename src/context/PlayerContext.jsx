// import { createContext, useContext, useState } from "react";

// const PlayerContext = createContext();

// export const usePlayers = () =>{
//     const context = useContext(PlayerContext);
//     if (!context){
//         throw new Error("usePlayer must be used within a PlayerProvider")
//     }

//     return context;
// }

// export function PlayerProvider({ children }){

//     const [myPlayers, setMyPlayers] = useState([]);


// return(
//     <PlayerContext.Provider 
//     value={{
//         myPlayers,

//     }}
//     >
//         {children}
//     </PlayerContext.Provider>
// )
// }