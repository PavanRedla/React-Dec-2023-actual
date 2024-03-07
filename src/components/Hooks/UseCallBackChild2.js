import React from 'react'

function UseCallBackChild2({ b }) {
  console.log('UseCallBackChild2 rendered')
  return (
    <div>UseCallBackChild2- b from parent is {b}</div>
  )
}
export default React.memo(UseCallBackChild2)
