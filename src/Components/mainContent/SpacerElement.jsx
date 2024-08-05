import React from 'react'
import './styles/SpacerElement.css'

const SpacerElement = ({factor}) => {

    const classNameFactor = `spacer-element-${factor}x`;

  return (
    <div className={classNameFactor}></div>
  )
}

export default SpacerElement