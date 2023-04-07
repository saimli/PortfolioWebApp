import React from 'react'
import '../App.css'

function innerpopup(props) {
  return (
    props.trigger ? (
      <div className='innerpopup'>
        <div className='innerpopup-inner'>
          <button className='innerclose-btn' onClick={() => props.setTrigger(false)}>
            close
            </button>
          {props.children}
        </div>
      </div>
    ) : ""
  );
}

export default innerpopup;
