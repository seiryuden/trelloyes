import React from "react";
import Card from "./Card"
import "./List.css"


function List(props){
    console.log(props);
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map(function(card, i){
                    
                  return <Card 
                    key={i} 
                    title={card.title} 
                    content={card.content} />
                }
                )}
            </div>
        </section>
    );

}

export default List;