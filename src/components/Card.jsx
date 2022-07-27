import React from "react";
import { CardWrapper } from "./styles/Card.styled";
const Card = ({ item: { id, title, body, image}}) => {
  return (
    <CardWrapper layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </CardWrapper>
  );
};

export default Card;
