import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import dataDailyJson from '../../types/apiDataDaily.json'
import {RootState} from "../index";

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
    // Sliceの名称
    name: 'covid',

    // Stateの初期状態　
    initialState: initialState,

    // Stateに対して許可する更新処理を定義する場所(ただし非同期処理は書けない)
    reducers: {},

    // 必要に応じて追加のReducerを指定できる
    // 別のSliceで生成されたActionに反応したい場合や非同期処理に対して
    extraReducers: (builder) => {
        // addCase:　
        // 第一引数　非同期処理の状態　
        //         (pending: 非同期処理中, fulfilled: 非同期処理の成功時, rejected: 非同期処理の失敗時)
        // 第二引数  reducer
        builder.addCase(fetchDataDaily.fulfilled, (state, action) => {
            // スプレッド構文
            return {
                ...state, // クローン
                dataDaily: action.payload.data, // 上書き
                country: action.payload.country // 上書き
            }
        });
    }
});

// React Componentからstateを参照するための関数を定義
export const selectDataDaily = (state: RootState) => state.covid.dataDaily;
export const selectCountry = (state: RootState) => state.covid.country;

export default covidSlice.reducer;