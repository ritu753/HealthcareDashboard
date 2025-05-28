import React from 'react'
import ActivityFeed from './ActivityFeed';
import Upcomingschedule from './Upcomingschedule';

const Schedule = () => {
  return (
    <div className='sechdeule-container'>
    <ActivityFeed />
    <Upcomingschedule />
    </div>
  )
}

export default Schedule;