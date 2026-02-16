import React, { useEffect, useState } from 'react'

const List = ({getItem}) => {
    const[items,setItems]=useState([]);
    useEffect(()=>{
        setItems(getItem());
        console.log('Updating Items');
    },[getItem])
  return (
    <div>
        {items.map((item,index)=><div key={index}>{item}</div>)}
    </div>
  )
}

export default List