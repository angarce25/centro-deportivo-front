import PlayersTable from '../components/players/PlayersTable.jsx';
import Sidebar from '../components/sideBar/SideBar.jsx';

const PlayersP = () => {
  return (
    <section style={{ display: 'flex' }}>
      <Sidebar style={{ flex: '0 0 auto' }} /> 
      <div style={{ marginLeft: '20px' }}> 
        <PlayersTable />
        
      </div>
    </section>
  );
};

export default PlayersP ;
