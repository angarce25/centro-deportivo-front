import React from 'react';
import PlayersTable from '../components/players/PlayersTable.jsx';
import Sidebar from '../components/sideBar/SideBar.jsx';


const PlayersView= () => {
  return (
    <section style={{ display: 'flex' }}>
      <Sidebar style={{ flex: '0 0 auto' }} /> {/* Fija el Sidebar en la pantalla */}
      <div style={{ marginLeft: '20px' }}> {/* Ajusta el espacio entre el Sidebar y los nuevos componentes */}
        <PlayersTable/>
        {/* Aquí puedes añadir más componentes, como AddCategory, NewUser, UsersTable, etc. */}
      </div>
    </section>
  );
};

export default PlayersView ;
