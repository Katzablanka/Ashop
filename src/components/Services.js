import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking,FaShuttleVan,FaFortAwesome, FaInfo} from 'react-icons/fa';

export default class Services extends Component {
    
    
    state={
        services:[
            {
                icon:<FaInfo/>,
                title:'24/7 reception',
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Katzablanka Anhelina'
            },
            {
                icon:<FaHiking/>,
                title:'endless hicking',
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Katzablanka Anhelina'
            },
            {
                icon:<FaShuttleVan/>,
                title:'free shuttle',
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Katzablanka Anhelina'
            },
            {
                icon:<FaFortAwesome/>,
                title:'kids program',
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Katzablanka Anhelina'
            }
        ]
    }



    render() {
        return (
            <section className='services'>
                <Title title='services'/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>

            </section>
        )
    }
}
