import React from 'react'

export default function IndexImages({img, txt}) {
  return (
  <div>
    <img className="index-image" src={img} alt="" />
    <h3 className="index-image-title" >{txt}</h3>
  </div>
  )
}
