import React from 'react'

function UseCallBackChild1({a}) {
  console.log('UseCallBackChild1 rendered')
  return (
    <div>UseCallBackChild1 - a from parent is {a}</div>
  )
}
export default React.memo(UseCallBackChild1)
