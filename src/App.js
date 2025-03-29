import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import card1 from "./card1.jpg";
import star from './star.jpeg';
import card2 from './card2.PNG';
import card3 from './card3.PNG';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-container">
        <Card
          img={card1}
          alt="Card image"
          rating="5.0"
          star={star}
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
          openSpots={0}
        />
        <Card
          img ={card2}
          alt="Card image"
          rating="5.0"
          star={star}
          reviewCount={30}
          country="USA"
          title="Learn wedding photography"
          price={125}
          openSpots="Online"
        />
        <Card
          img={card3}
          alt="Card image"
          rating="4.8"
          star={star}
          reviewCount={2}
          country="USA"
          title="Group Mountain Biking"
          price={50}
          openSpots={0}
        />
      </div>
    </div>
  );
}
