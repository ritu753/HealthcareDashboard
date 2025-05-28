import React from 'react';
import Body from '../../assets/body.png'
import { anatomyIndicators } from '../../Data/Anatomy';
import { IoIosArrowDown } from "react-icons/io";
import Chart from "./Chart";
import './Dashboard.css'

const Structurebody = () => {
  return (
    <div>
      <div className="info">
        <h5>Dashboard</h5>
        <p>This Week <IoIosArrowDown /></p>
      </div>
      <div className="stucture-body">
        <img src={Body} className='body-skel' />
        <div className='body-info'>
        {anatomyIndicators.map((data,index)=>{
          return (
            <div className='card'>
              <a href='#' className='parts'><img src={data.img} /> {data.label}</a>
              <p>{data.date}</p>
              <div className='progessbar'><div className={`bar bar-${index}`}></div></div>
            </div>
          )
        })}
        </div>
      </div>
      <Chart />
    </div>
  )
}

export default Structurebody