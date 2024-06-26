import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import{RoomContext} from '../context'
import StyledHero from '../components/StyledHero'






export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
        slug: this.props.match.params.slug,
            defaultBcg
        };
        //console.log(this.props);
    }
   // componentDidMount(){}
    static contextType = RoomContext;
    

  intoCard = () => {
      const{getRoom}=this.context;
      const room = getRoom(this.state.slug);
      var serialObj = JSON.stringify(room);
      sessionStorage.setItem(this.props.match.params.slug,serialObj);
      console.log(serialObj);
};

    render() {
        const{getRoom}=this.context;
        const cardslug=this.state.slug;
        const room = getRoom(this.state.slug);
        if(!room){
            return (<div className="error">
                <h3>no such room could be found...</h3>
                <Link to='/rooms' className='btn-primary'>Back to rooms</Link>

                
            </div>);
        } 
        const{name, description,capacity,size,price,extras,breackfast,pets,images }=room;
        const[mainImg,...defaultImages]= images;
        console.log(defaultImages);
    return(
        <>
                    <StyledHero img={mainImg||this.state.defaultBcg}>
                        <Banner title={`${name} room`}>
                            <Link to='/rooms' className='btn-primary-book'>Back to rooms</Link>
                            <Link to='/card' className='btn-primary-book ' name={name} price={price} capacity={capacity} onClick={this.intoCard}>book</Link>
                        </Banner>
                    </StyledHero>
                    <section className='single-room'>
                        <div className="single-room-images">
                            {defaultImages.map((item, index) => (
                            <img key={index} src={item} alt={name} />
                            ))}
                        </div>
                        <div className="singlr-room-info">
                          <article className="desc">
                              <h3>details</h3>
                              <p>{description}</p>
                              <article className='info'>
                                <h3>info</h3>
                                <h6>prise: ${price}</h6>
                                <h6>size: {size}SQFT</h6>
                                <h6>max capacity: {
                                    capacity>1?`${capacity} people`:`${capacity} person`
                                }
                                </h6>
                                <h6>{pets?'pets allowed':'no pets allowed'}</h6>
                                <h6>{breackfast && 'free breackfast included'}</h6>
                              </article>
                         </article>  
                        </div>
                    </section>
                    <section className='room-extras'>
                        <h6>extras</h6>
                        <ul className="extras">
                            {extras.map((item,index)=>{
                                return <li key={index}>- {item}</li>
                            })}
                        </ul>
                    </section>
        </>
    );
    }
}



