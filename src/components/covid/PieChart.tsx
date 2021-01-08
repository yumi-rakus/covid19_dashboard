import React from "react";

import {Typography} from "@material-ui/core";
import {Doughnut} from "react-chartjs-2";

import {useSelector} from "react-redux";
import {selectDataDaily} from "../../store/slices/covidSlice";

const PieChart: React.FC = () => {

    // store/stateからデータを取得
    const dataDaily = useSelector(selectDataDaily);

    // 致死率の算出
    const latestInfected: number = dataDaily[dataDaily.length - 1].Confirmed;
    const latestDeaths: number = dataDaily[dataDaily.length - 1].Deaths;
    const mortality: number = dataDaily[0] && (latestDeaths / latestInfected) * 100;

    // Doughnut用データ
    const doughnutData = {
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
            {
                data: [
                    dataDaily[dataDaily.length - 1].Confirmed,
                    dataDaily[dataDaily.length - 1].Recovered,
                    dataDaily[dataDaily.length - 1].Deaths
                ],
                backgroundColor: [
                    'rgba(0, 0, 255, 0.5)',
                    '#008080',
                    'rgba(255, 0, 0, 0.5)'
                ],
                hoverBackgroundColor: ['#36A2EB', '#3cb371', '#FF6384'],
                borderColor: ['transparent', 'transparent', 'transparent']
            }
        ]
    };

    // Doughnut用オプション
    const doughnutOptions = {
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 15
            }
        }
    }

    // JSX作成
    const doughnutChart = dataDaily[0] && (
        <Doughnut data={doughnutData} options={doughnutOptions}/>
    )

    return (
        <div>
            <Typography align={"center"} color={"textSecondary"} gutterBottom>
                Mortality {mortality.toFixed(2)} [%]
            </Typography>
            {doughnutChart}
        </div>
    );
};

export default PieChart;