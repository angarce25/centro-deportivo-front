import React from 'react'
import PlayersTable from '../components/particles/admin/PlayersTable.jsx';
import AddCategory from '../components/particles/admin/AddCategory.jsx'
import NewUser from '../components/particles/admin/NewUser.jsx';
import UsersTable from '../components/particles/admin/UsersTable.jsx';


const AdminDash = () => {
  return (
    <section> 
      <PlayersTable />    
       <UsersTable />
       <NewUser />
       <AddCategory />
    
    </section>
  )
}

export default AdminDash;