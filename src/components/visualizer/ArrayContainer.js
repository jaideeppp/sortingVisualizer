import React from 'react'

function ArrayContainer({ array }) {
  return (
    <div className="array-holder">
      {array.map((value, i) => {
        return (
          <div className="array-item">
            {value}
          </div>
        )
      })}
    </div>
  )
}

export default ArrayContainer
