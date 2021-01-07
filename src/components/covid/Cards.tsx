import React from "react";
import styles from '../../assets/css/Cards.module.css'

import Card from "./Card";
import {Card as MaterialCard, Grid} from "@material-ui/core";

import {useSelector} from "react-redux";
import {selectDataDaily} from "../../store/slices/covidSlice";


const Cards: React.FC = () => {

    // storeのstateを取得
    const dataDaily = useSelector(selectDataDaily);

    return (
        <div className={styles.container}>
            <Grid container spacing={1} justify={"center"}>
                <Grid item xs={12} md={3} component={MaterialCard} className={styles.infected}>
                    <Card item={'infected'} title={'Infected person'}
                          numberOfPeople={dataDaily[dataDaily.length - 1].Confirmed}/>
                </Grid>
                <Grid item xs={12} md={3} component={MaterialCard} className={styles.recovered}>
                    <Card item={'recovered'} title={'Recovered person'}
                          numberOfPeople={dataDaily[dataDaily.length - 1].Recovered}/>
                </Grid>
                <Grid item xs={12} md={3} component={MaterialCard} className={styles.deaths}>
                    <Card item={'deaths'} title={'Deaths person'}
                          numberOfPeople={dataDaily[dataDaily.length - 1].Deaths}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;