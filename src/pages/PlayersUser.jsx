import PlayersUsersChart from '../components/players/PlayersUsersChart.jsx';
import Sidebar from '../components/sideBar/SideBar.jsx';


const PlayersUser = () => {
  return (
    <section style={{ display: 'flex' }}>
      <Sidebar style={{ flex: '0 0 auto' }} /> 
      <div style={{ marginLeft: '20px' }}> 
        <PlayersUsersChart />
        
      </div>
    </section>
  );
};

export default PlayersUser ;
