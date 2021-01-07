import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

import dataDailyJson from '../../types/apiDataDaily.json'

// ベースのURL
const apiUrl = 'https://api.covid19api.com/total/country/';

// APIから取得するdataをtypeとして定義
type DATA_DAILY = typeof dataDailyJson;

// state
type covidState = {
    dataDaily: DATA_DAILY;
    country: string;
};

// stateの初期値
const initialState: covidState = {
    dataDaily: dataDailyJson,
    country: 'Japan'
};


const covidSlice = createSlice({
    name: 'covid',
    initialState: initialState,
    reducers: {}
});

export default covidSlice.reducer;