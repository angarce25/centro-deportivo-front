import React from 'react'
import PlayersTable from '../components/particles/PlayersTable.jsx';
import AddCategory from '../components/particles/AddCategory.jsx';

import WideTable from '../components/particles/UsersTable.jsx';
import NewUser from '../components/particles/NewUser.jsx';
import UsersTable from '../components/particles/UsersTable.jsx';


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