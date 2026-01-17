import React from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import { StoreProvider } from './Context/AuthContext'
import EditTask from './Components/EditTask'

const page = () => {
  return (
    <div>
      <StoreProvider>
      <Header/>
      <Tasks/>
      <EditTask/>
      </StoreProvider>
    </div>
  )
}

export default page
