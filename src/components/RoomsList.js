import React from 'react'
import { FaSearch } from 'react-icons/fa';
import Room from './Room';

export default function RoomsList({rooms}) {
    if(rooms.length === 0){
        return(
            <div className="empty-search">
                <h3>
                    unfortunately, no rooms match your parameters
                </h3>
            </div>
        )
    }
    
    return (
        <section className='roomslist'>
            <div className="roomslist-center">
                { 
                    rooms.map(item=>{
                        return <Room  room={item}/>
                    })
                }
            </div>
        </section>
    )
}
