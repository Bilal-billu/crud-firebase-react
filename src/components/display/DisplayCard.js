import React, { useEffect, useState } from 'react'

export default function DisplayCard({item, editItem, deleteItem}) {
    var [toggleEdit, setToggleEdit]=useState(false);
    var [tempItem, setTempItem] = useState({})
    useEffect(()=>{
        setTempItem({
            id:item.id,
            name: item.name,
            age: item.age
        })
    },[])
  return (
    <tr className='d-flex flex-row align-items-center justify-content-center'>
      <td className='col-3'><label>{item.id}</label></td>
      <td  className='col-3'>{toggleEdit?
      <input type='text' value={tempItem.name} required onChange={(e)=>{
        setTempItem(prev=>{
            return {
                ...prev,
                name: e.target.value
            }
        })
      }}/> :
      <label>{tempItem.name}</label>
      }</td>
      <td className='col-2'>{toggleEdit?
      <input type='number' value={tempItem.age} required onChange={(e)=>{
        setTempItem(prev=>{
            return {
                ...prev,
                age: e.target.value
            }
        })
      }}/>:
      <label>{tempItem.age}</label>
    }</td>
      <td  className='col-4'>
        <button className='m-1' onClick={()=>{
            if(toggleEdit)
            {
                editItem(tempItem)
            }
            setToggleEdit(prev=>!prev)
        }}>{toggleEdit?"Save":"Edit"}</button>
        <button className='m-1' onClick={()=>{
            deleteItem(tempItem.id)
        }}>Delete</button>
      </td>
    </tr>
  )
}

DisplayCard.defaultProps = {
    item: {
        id: "AbCdEf3An",
        name: "No Name",
        age: 0
    },
    editItem:(item)=>{
        console.log("Edited item with ID:", item.id)
    },
    deleteItem:(id)=>{
        console.log("Deleted item with ID:", id)
    }
}