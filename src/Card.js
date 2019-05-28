import React from 'react';
import "./Card.css"

function Card(props){
    
    
    return (
        <div className="Card">
            <h1>{props.cardId}</h1>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button onClick={() => props.onDeleteItem(props.listKey, props.cardId)}>Delete</button>
            
        </div>
    );
}

export default Card;