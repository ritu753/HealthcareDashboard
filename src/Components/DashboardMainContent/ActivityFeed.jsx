import React from 'react';
import { RiArrowLeftFill } from "react-icons/ri";
import { RiArrowRightFill } from "react-icons/ri";

import { schedule, appointments } from '../../Data/Activity'; 


const ActivityFeed = () => {
  return (
     <div className="feed">
      <div className='date-info'>
        <h2>October 2021</h2>
        <div className="arrow">
          <a href="#"><RiArrowLeftFill /></a>
          <a href="#"><RiArrowRightFill /></a>
        </div>
      </div>

      <div className="date-container">
        {schedule.map(({ day, date, slots }) => (
          <div key={date} className='slots'>
            <p className='day-cont'>{day}</p>
            <p className='date-con'>{date}</p>
            <div >
              {slots.map((time) => (
                <div
                  key={time}
                  className="time-cont">
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="appointments-con">
        {appointments.map(({ title, time, doctor, icon, color }) => (
          <div key={title} className="appoint">
            <h3>
              {title} <span>{icon}</span>
            </h3>
            <p >{time}</p>
            <p>{doctor}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed