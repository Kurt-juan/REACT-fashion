import React from 'react'

const Wrapper = (props) => {
  return (
    <div>
        <div className="max-w-[1200px] mx-auto px-2">
            {props.children}
        </div>
    </div>
  )
}

export default Wrapper