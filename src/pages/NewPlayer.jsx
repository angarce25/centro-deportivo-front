import FormNewPlayer from '../components/players/FormNewPlayer'
import Sidebar from '../components/sideBar/SideBar'

export default function NewPlayer() {
  return (
    <div className="flex flex-row h-full">
      <Sidebar className="flex-grow" />
      <FormNewPlayer className="flex-grow" />
    </div>
  );
}
