import React from 'react'

import { cards } from '../../data';
import SingleCard from '../singleCard/SingleCard';
import Slide from '../slide/Slide';

const Carousel = () => {
  return (
   
    <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card)=>{
            return <SingleCard key={card.id} card={card}/>
        })}
    </Slide>
    
  )
}

export default Carousel