import React from 'react'
function Sqauer({value,onClick,playwinne}) {
    const prps = value ?`sqaure ${value}`:  `sqauredo` 
    return (
        <button className={prps} onClick={onClick} >
            {value}
        </button>
        )
}
export default Sqauer;