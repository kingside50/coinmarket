import React from 'react';
import './Backchart.css'

const BackChart = ({style, content,header}) => {
    return(
<div className={style} >
  <div className='card'>
  <div className='H2'>{header}</div>
  <div>{content}</div>
  </div>
</div>
    )
}

export default BackChart;