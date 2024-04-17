import { useState } from 'react';

function Form() {
const [userName, setName] = useState('');
const [userEmail, setEmail] = useState('');
const [userTel, setTelephone] = useState('');

const OrderToDB = () =>{
        let bookedrooms='';
        let keys = Object.keys(sessionStorage);
        let total=0;
        for(let key of keys) {
        let output=sessionStorage.getItem(key);
        let room= JSON.parse(output);
        bookedrooms+=`${room.slug}:${room.price}$,`;
        total+=room.price;
        } 
    console.log(bookedrooms);
    
 var body = { 
     name:userName, 
     email:userEmail, 
     phone:userTel, 
     rooms:bookedrooms, 
     price:total};




 fetch('/card', { 
        method: 'POST',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
      .then(function(response) {
        return response.json()
      })
    .then(function(body) {
        console.log(body);
     
      }).then(function(){
   document.getElementById('input_name').value = "";
   document.getElementById('input_email').value = "";
   document.getElementById('input_number').value = "";
   sessionStorage.clear();
   window.location.reload(); 
      });


  

}


  return (
      <>
     <div className='screen-width'>
            <div className='form-groupp'>
                <label>username</label>
                    <input id='input_name' type="text" name="username" placeholder="John Doe" onChange={(e)=>{setName(e.target.value)}}></input>
                <label>email</label>
                    <input id='input_email' type="email" name="email" placeholder="name@domain.com" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <label>contact-number</label>
                    <input id='input_number' type="tel" name="telephone"placeholder="380663215532" onChange={(e)=>{setTelephone(e.target.value)}}></input>
            </div>
    </div>
    <div className='btn-centered'> <a className='btn-primary' onClick={OrderToDB}>submit your reservations</a></div>
    </>
  );
}

export default Form;
 
