import PlayersUserChart from '../components/players/PlayersUserChart.jsx';
import Sidebar from '../components/sideBar/SideBar.jsx';


const PlayersUser = () => {
  return (
    <section style={{ display: 'flex' }}>
      <Sidebar style={{ flex: '0 0 auto' }} /> 
      <div style={{ marginLeft: '20px' }}> 
        <PlayersUserChart />
        
      </div>
    </section>
  );
};

export default PlayersUser ;
