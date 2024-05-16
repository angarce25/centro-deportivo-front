import React from 'react';
import PlayersChart from '../components/players/PlayersChart.jsx';
import Sidebar from '../components/sideBar/SideBar.jsx';

const PlayersView= () => {
  return (
    <section style={{ display: 'flex' }}>
      <Sidebar style={{ flex: '0 0 auto' }} /> {/* Fija el Sidebar en la pantalla */}
      <div style={{ marginLeft: '20px' }}> {/* Ajusta el espacio entre el Sidebar y los nuevos componentes */}
        <PlayersChart/>
        {/* Aquí puedes añadir más componentes, como AddCategory, NewUser, UsersTable, etc. */}
      </div>
    </section>
  );
};

export default PlayersView ;
