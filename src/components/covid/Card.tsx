import React from "react";

import CountUp from "react-countup";
import {CardContent, Typography} from "@material-ui/core";

import {GiHastyGrave, MdLocalHospital, AiFillLike} from "react-icons/all";

// Propsの定義
interface Props {
    item: string;
    title: string;
    numberOfPeople: number;
}

const Card: React.FC<Props> = props => {

    // 項目によってアイコンのJSXを決定する
    let icon;

    if (props.item === 'infected') {
        icon = <MdLocalHospital/>;
    } else if (props.item === 'recovered') {
        icon = <AiFillLike/>;
    } else {
        icon = <GiHastyGrave/>;
    }

    return (
        <CardContent>
            <Typography color={"textSecondary"} gutterBottom>
                {icon}
                {props.title}
            </Typography>
            <Typography variant={"h6"}>
                <CountUp
                    start={0}
                    end={props.numberOfPeople}
                    duration={1.5}
                    separator={','}
                />
            </Typography>
        </CardContent>
    );
};

export default Card;