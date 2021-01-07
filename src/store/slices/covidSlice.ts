import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import dataDailyJson from '../../types/apiDataDaily.json'

// ベースのURL
const apiUrl = 'https://api.covid19api.com/total/country';

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

// createAsyncThunk: 非同期に対応したAction Creator
export const fetchDataDaily = createAsyncThunk('covid/getDaily', async (country: string) => {
    // GenericsでAPIから取得するデータ型を保証
    const {data} = await axios.get<DATA_DAILY>(`${apiUrl}/${country}`);
    return {data: data, country: country};
})


const covidSlice = createSlice({
    name: 'covid',
    initialState: initialState,
    reducers: {}
});

export default covidSlice.reducer;