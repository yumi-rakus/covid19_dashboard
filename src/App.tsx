import React from 'react';
import './assets/css/App.css';
import Cards from "./components/covid/Cards";
import Chart from "./components/covid/Chart";
import PieChart from "./components/covid/PieChart";
import SwitchCountry from "./components/covid/SwitchCountry";

function App() {
    return (
        <div>
            <Cards/>
            <Chart/>
            <PieChart/>
            <SwitchCountry/>
        </div>
    );
}

export default App;
