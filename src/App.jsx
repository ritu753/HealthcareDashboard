import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import DashboardMainContent from './Components/DashboardMainContent/DashboardMainContent';


function App() {

  return (
    <div className='main-container'>
        <Header />
        <Sidebar />
        <div className="main-content">
        <DashboardMainContent />
        </div>
    </div>
  )
}

export default App;
