import React from 'react'
import useToggleArrayItem from '../../hooks/useToggleArrayItem'

function ToggleArrayItem() {
    const [toggle, value] = useToggleArrayItem([1,2,3,4,5], 2)
  return (
    <div>
        {value}
        <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default ToggleArrayItem