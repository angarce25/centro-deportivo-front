import PlayersAdminChart from '../components/players/PlayersAdminChart.jsx';
import Sidebar from '../components/sideBar/SideBar.jsx';

const PlayersAdmin = () => {
  return (
    <section className='flex'>
      <Sidebar />
    
        <PlayersAdminChart />
      
    </section>
  );
};

export default PlayersAdmin ;