import React, {ChangeEvent} from "react";

import {makeStyles, NativeSelect, FormControl} from "@material-ui/core";

import {useDispatch} from "react-redux";
import {fetchDataDaily} from "../../store/slices/covidSlice";

const useStyle = makeStyles((theme) => ({
    formControl: {
        marginBottom: theme.spacing(3),
        minWidth: 320
    }
}));

const SwitchCountry: React.FC = () => {

    // 使用準備
    const classes = useStyle();
    const dispatch = useDispatch();

    // 国リスト
    const countries = [
        'japan',
        'china',
        'us',
        'france',
        'italy',
        'spain',
        'united kingdom',
        'germany',
        'russia',
        'brazil',
        'taiwan',
        'thailand',
        'sweden',
        'india'
    ];

    // event handler
    const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        // 非同期関数の呼び出し
        // 国が変更される度にAPIを呼び出し、stateのデータを更新する
        dispatch(fetchDataDaily(e.target.value));
    }

    return (
        <FormControl className={classes.formControl}>
            <NativeSelect onChange={handleChange}>
                {countries.map((country, i) => (
                    <option key={i} value={country}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default SwitchCountry;