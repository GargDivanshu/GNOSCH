import React from 'react'

const Products = (props) => {
  return (
    <div className="flex flex-col">
      <img src={props.img} alt={props.alt} />
      <div className="">  {props.Title} </div>
      <div> {props.Place} </div>
    </div>
  )
}

export default Products