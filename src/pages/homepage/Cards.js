import React from 'react';
import { Card } from "react-bootstrap";

const Cards = () => {
   const cardInfo = [
    {
      image: this.image,
      title: this.cardTitle,
      text: this.imdbRating,
    },
//     {
//       image:
//         "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
//       title: "Alex Caruso",
//       text: "THE TRUE GOAT",
//     },

];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Title>{card.title}</Card.Title>
        <Card.Img variant="top"  src={card.image} />
        <Card.Body>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.renderCard()}</div>;
};

export default Cards;