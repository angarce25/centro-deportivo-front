import React from 'react'
import PlayersTable from '../components/players/PlayersTable.jsx';
import AddCategory from '../components/players/AddCategory.jsx'
import NewUser from '../components/users/NewUser.jsx'
import UsersTable from '../components/users/UsersTable.jsx'

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