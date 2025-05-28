import React from 'react';

const data = [
  { day: 'Mon', bars: [50, 30, 70] },
  { day: 'Tues', bars: [60, 40, 20] },
  { day: 'Wed', bars: [40, 50, 30] },
  { day: 'Thurs', bars: [60, 30, 50] },
  { day: 'Fri', bars: [70, 40, 60] },
  { day: 'Sat', bars: [50, 30, 40] },
  { day: 'Sun', bars: [40, 20, 30] },
];

const colors = ['#10D2F5', '#A0AEC0', '#4C51BF'];

const Chart = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <span className="activity-info">3 appointments on this week</span>
      </div>
      <div className="activity-chart">
        {data.map((item, index) => (
          <div key={index} className="activity-day">
            <div className="bar-group">
              {item.bars.map((height, i) => (
                <div
                  key={i}
                  className="activitybar"
                  style={{
                    height: `${height}px`,
                    backgroundColor: colors[i],
                  }}
                />
              ))}
            </div>
            <span className="day-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chart