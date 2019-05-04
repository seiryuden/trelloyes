import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List";

describe("List component", () =>{ 

it ("renders without crashing", () =>{

    const cards = [{title: 'First card', content: 'lorem ipsum'}, { title: 'Second card', content: 'lorem ipsum' }];
    const div = document.createElement("div");
    ReactDOM.render(<List cards={cards}/>, div);
    ReactDOM.unmountComponentAtNode(div);

});


it ("renders UI as expected", () =>{
    const cards = [{title: 'First card', content: 'lorem ipsum'}, { title: 'Second card', content: 'lorem ipsum' }];
    const tree = renderer
        .create(<List cards={cards} header="Second List" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
    
});
});