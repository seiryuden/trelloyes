import React from "react";
import Card from "./Card"
import "./List.css"


function List(props){
    
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <button onClick= {() => props.onAddRandom(props.listKey)}>Add random card</button>
            <div className="List-cards">
                {props.cards.map(function(card, i){
                    
                  return <Card 
                    key={i}
                    listKey= {props.listKey}
                    cardId= {props.cardIds[i]} 
                    title={card.title} 
                    content={card.content}
                    onDeleteItem={props.onDeleteItem}
                    onAddRandom={props.onAddRandom}
                    
                    />
                    
                }
                )}
            </div>
        </section>
    );

}

export default List;