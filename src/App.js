import React from 'react';
import Store from "./store";
import List from "./List";
import "./App.css"




function App(props) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {Store.lists.map(list =>
          
          <List 
            listKey={list.id}
            header={list.header}
            cards= {list.cardIds.map(id => Store.allCards[id])}
            
          />
          
        )}
      </div>
    </main>
  );
}

export default App;
