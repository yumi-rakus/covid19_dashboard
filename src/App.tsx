import React from 'react';
import './assets/css/App.css';
import Cards from "./components/covid/Cards";
import Chart from "./components/covid/Chart";

function App() {
    return (
        <div>
            <Cards/>
            <Chart/>
        </div>
    );
}

export default App;
