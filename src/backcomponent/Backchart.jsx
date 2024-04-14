import React from 'react';
import './Backchart.css'

const BackChart = ({style, content,header}) => {
    return(
<div className={style} >
  <div className='cards'>
  <div className='Header'>{header}</div>
  <div>{content}</div>
  </div>
</div>
    )
}

export default BackChart;