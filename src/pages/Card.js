
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import{RoomContext} from '../context'
import StyledHero from '../components/StyledHero'
import Bookedroom from '../components/Bookedroom'
import Form from '../components/Form'

import React, { Component } from 'react'

export default class Card extends Component {
  // constructor(props){
  //       super(props);
  //       this.state={
  //       room: this.props.match.params.name
  //       };
  //       console.log(this.room);
  //   }
   // componentDidMount(){}
    // static contextType = RoomContext;
// handleFormSubmit (){
// const [userName, setName] = useState('');
// const [userEmail, setEmail] = useState('');
// const [userTel, setTelephone] = useState('');
// };
  
  render() {
    // const{getRoom}=this.context;
    //     const room = getRoom(this.state.room);

   
     //console.log(bookedrooms);
         let input = document.querySelector('input');
    console.log(input);
        let bookedrooms=[];
        let keys = Object.keys(sessionStorage);
        let total=0;
        for(let key of keys) {
        let output=sessionStorage.getItem(key);
        let room= JSON.parse(output);
        bookedrooms.push(room);
        total+=room.price;
        } 
          // for (var i = 0, length = sessionStorage.length; i < length; i++) {
          // sessionStorage.key(i) 
          // let output=sessionStorage.getItem(localStorage.key(i));
          // console.log(output);
          // let room= JSON.parse(output);
          // bookedrooms.push(room);
          // }
        if(sessionStorage.length===0){
            return (<div className="error">
                <h3>your card is empty...</h3>
                <Link to='/' className='btn-primary'>Back to main page</Link>

                
            </div>);
            
        }

      
    
    //  purchuse=()=>{
    //    let bookedrooms=[];
    //    for (var i = 0, length = localStorage.length; i < length; i++) {
    //  sessionStorage.key(i) 
    //  var output= JSON.parse( sessionStorage.getItem(localStorage.key(i)) );
    //  bookedrooms.push(output);
    //  return bookedrooms;
    //  }
    //  }
    
     

   
    return (
      <>
      <br/><br/>
      <h6 className='price-tag'>Your personal card</h6>
      <table className='table-card'>
  <thead className='card-thead'>
    <tr className='card-tr'>
      <th className='card-th' className='card-td-th'>Name</th>
      <th className='card-th' className='card-td-th'>Price</th>
      <th className='card-th' className='card-td-th'></th>
    </tr>
  </thead>
  
      <tbody className='card-tbody'>
       {bookedrooms.map(item=>{
    
                         return <Bookedroom  key={item.name} room={item}/>
                    })      
                }
          </tbody>
      </table>
        <p className='price-tag'>total price: $ {total} </p>
           <Form/>
             
      </>
    )
  }
}


