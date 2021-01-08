import React, {useEffect} from "react";
import styles from '../../assets/css/DashBoard.module.css';

import {useDispatch, useSelector} from "react-redux";
import {selectDataDaily, selectIsLoading, fetchDataDaily} from "../../store/slices/covidSlice";

import {Container, Grid, makeStyles, CircularProgress, Fade} from "@material-ui/core";
import Header from "../elements/Header";
import SwitchCountry from "./SwitchCountry";
import Cards from "./Cards";
import Chart from "./Chart";
import PieChart from "./PieChart";

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: 85
    }
}))

const DashBoard: React.FC = () => {

    // 使用準備
    const classes = useStyles();
    const dispatch = useDispatch();

    // store/stateからデータを取得
    const dataDaily = useSelector(selectDataDaily);
    const isLoading = useSelector(selectIsLoading);

    // ブラウザが起動した際に初期値として与えるデータを取得
    useEffect(() => {
        dispatch(fetchDataDaily('japan'));
    }, [dispatch]);

    // lastUpdate日付取得
    const latestDate = new Date(dataDaily[dataDaily.length - 1].Date).toDateString();

    return (
        <div>
            <Header latestDate={latestDate}/>

            <Container className={classes.content}>
                {/*Loading*/}
                <div className={styles.container}>
                    <Fade in={isLoading}>
                        <CircularProgress/>
                    </Fade>
                </div>

                {/*Content*/}
                <div style={{display: isLoading ? 'none' : 'block'}}>
                    <div className={styles.container}>
                        <SwitchCountry/>
                    </div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <Cards/>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Chart/>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <PieChart/>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default DashBoard;