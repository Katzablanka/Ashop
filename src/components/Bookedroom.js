import React from 'react'

export default function Bookedroom({room}) {
  const{name,slug,images,price}=room;
  console.log('this is it');
 console.log(room);

 function deleteroom () {
     sessionStorage.removeItem(slug);
     window.location.reload();
 };
    return (

<tr className='card-tr'>
    <td data-column="Name" className='card-td-th' className='card-td'>{name}</td>
    <td data-column="Price" className='card-td-th'  className='card-td'>${price}</td>
    <td data-column="Delete" className='card-td-th'  className='card-td' className='card-tdd'><a className='btn-primary' onClick={deleteroom}>Delete</a></td>
</tr>


    )
}
