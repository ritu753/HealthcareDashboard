import React from 'react'
import Structurebody from './Structurebody';
import Schedule from './Schedule';


const DashboardMainContent = () => {
  return (
    <section>
      <div className="dashboard">
        <div className="left-dashboard">
          <Structurebody />
        </div>
        <div className="right-dashboard">
          <Schedule />
        </div>
      </div>
    </section>

  )
}

export default DashboardMainContent