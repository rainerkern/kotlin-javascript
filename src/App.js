import React from 'react';
import Kotlin from 'kotlin';
import Custom from './kotlin-javascript';


const App = () => (
    <div className="App" onClick={Custom.main}>
        Hello Kotlin or JS in React
    </div>
);


export default App;

