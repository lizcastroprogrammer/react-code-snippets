import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const { useState } = React;
    let [state, setState]= useState([1,2,3,4]);
    const handler = index => {
        //code to update state and remove destroyed button
        //use filter
        //setState(newState)
       let newState = state.filter(item => item !== index);
       setState(newState);
    }
    let list = state.map((item, index) => {
        return <MyButton onClick={() => handler(item)} key={index}/>
    });
    return <div>{list}</div>;
};

const MyButton = ({ onClick }) => {
    let { Button } = ReactBootstrap;
    return (
        <Button onClick={onClick}>
            Click Me
        </Button>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));