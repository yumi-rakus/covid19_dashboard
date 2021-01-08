import React from 'react';
import './assets/css/App.css';
import Cards from "./components/covid/Cards";
import Chart from "./components/covid/Chart";
import PieChart from "./components/covid/PieChart";

function App() {
    return (
        <div>
            <Cards/>
            <Chart/>
            <PieChart/>
        </div>
    );
}

export default App;
