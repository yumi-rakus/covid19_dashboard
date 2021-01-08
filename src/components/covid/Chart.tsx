import React from "react";
import styles from "../../assets/css/Chart.module.css";
import {Line} from 'react-chartjs-2';

import {useSelector} from "react-redux";
import {selectDataDaily} from "../../store/slices/covidSlice";

const Chart: React.FC = () => {

    // store/stateからデータを取得
    const dataDaily = useSelector(selectDataDaily);

    // 日付の配列を作成
    const dates = dataDaily.map(({Date}) => Date);

    // LineChart用データ
    const lineData = {
        labels: dates.map((date) => new Date(date).toDateString()),

        datasets: [
            {
                data: dataDaily.map((data) => data.Confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                showLine: false
            },
            {
                data: dataDaily.map((data) => data.Recovered),
                label: 'Recovered',
                borderColor: 'green',
                showLine: false
            },
            {
                data: dataDaily.map((data) => data.Deaths),
                label: 'Deaths',
                borderColor: '#ff3370',
                showLine: false
            }
        ]
    };

    // JSX作成
    const lineChart = dataDaily[0] && (
        <Line data={lineData}/>
    )

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    );
};

export default Chart;