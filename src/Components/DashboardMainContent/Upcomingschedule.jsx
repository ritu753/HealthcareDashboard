import React from 'react';
import { upcomingAppointments } from '../../Data/Upcomingappointments';

const Upcomingschedule = () => {
  return (
     <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {Object.entries(upcomingAppointments).map(([day, appts], idx) => (
        <div key={idx} className="day-group">
          <h4>On {day}</h4>
          <div className="day-appointments">
            {appts.map((apt, i) => (
              <div key={i} className="simple-card">
                <div className='simple-card-con'>
                  <h5>{apt.title}</h5>
                  <span>{apt.icon}</span>
                  </div>
                  <p>{apt.time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Upcomingschedule