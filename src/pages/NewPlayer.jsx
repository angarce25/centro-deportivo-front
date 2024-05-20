import FormNewPlayer from '../components/players/FormNewPlayer'
import Sidebar from '../components/sideBar/SideBar'

export default function NewPlayer() {
  return (
    <div className="flex">
    <Sidebar/>
    <FormNewPlayer/>    
  </div>
  )
}
