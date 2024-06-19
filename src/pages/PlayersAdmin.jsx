import PlayersAdminChart from '../components/players/PlayersAdminChart.jsx';
import Sidebar from '../components/sideBar/SideBar.jsx';

const PlayersAdmin = () => {
  return (
    <section style={{ display: "flex" }}>
      <Sidebar style={{ flex: "0 0 auto" }} />
      <div style={{ marginLeft: "1%" }}>
        <PlayersAdminChart />
      </div>
    </section>
  );
};

export default PlayersAdmin ;