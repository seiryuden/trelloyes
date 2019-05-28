import React from 'react';
import List from "./List";
import "./App.css"




class App extends React.Component {

  state = {
    
      lists: [
        {
          id: '0',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '1',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '2',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '3',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { title: 'First card', content: 'lorem ipsum' },
        'b': { title: 'Second card', content: 'lorem ipsum' },
        'c': { title: 'Third card', content: 'lorem ipsum' },
        'd': { title: 'Fourth card', content: 'lorem ipsum' },
        'e': { title: 'Fifth card', content: 'lorem ipsum' },
        'f': { title: 'Sixth card', content: 'lorem ipsum' },
        'g': { title: 'Seventh card', content: 'lorem ipsum' },
        'h': { title: 'Eighth card', content: 'lorem ipsum' },
        'i': { title: 'Ninth card', content: 'lorem ipsum' },
        'j': { title: 'Tenth card', content: 'lorem ipsum' },
        'k': { title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { title: 'Twelth card', content: 'lorem ipsum' },
        'm': { title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    }

  
    onDeleteItem = (listKey, cardId) =>{

      const stateCopy = {...this.state}

      const newCards = stateCopy.lists[listKey].cardIds.filter(card => card !== cardId);
      
      stateCopy.lists[listKey].cardIds = newCards;

      this.setState({
        
        stateCopy

      })

      console.log(this.state)
  
    }


    onAddRandom = (listKey) =>{

      function newRandomCard() {
        const id = Math.random().toString(36).substring(2, 4)
          + Math.random().toString(36).substring(2, 4);
        return {
          id,
          title: `Random Card ${id}`,
          content: 'lorem ipsum',
        }
      }

    
      let randomCardId = newRandomCard().id;
      

      let stateCopy = {...this.state}

      stateCopy.allCards[randomCardId] = {title: newRandomCard().title, content: newRandomCard().content};

      stateCopy.lists[listKey].cardIds.unshift(randomCardId);

           
      this.setState({

        stateCopy

      })

      console.log(newRandomCard().id)
     
      console.log(stateCopy)

    }


  render(){

    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          <button></button>
          {this.state.lists.map((list, i) =>
            
            <List 
              key={i}
              listKey={i}
              header={list.header}
              cardIds={list.cardIds}
              cards= {list.cardIds.map(id => this.state.allCards[id])}
              onDeleteItem={this.onDeleteItem}
              onAddRandom={this.onAddRandom}
              
            />
            
          )}
        </div>
      </main>
    );


  }
  
}

export default App;
