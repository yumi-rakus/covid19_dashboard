import React from "react";
import {makeStyles, AppBar, Toolbar, Typography} from "@material-ui/core";

import {useSelector} from "react-redux";
import {selectIsLoading} from "../../store/slices/covidSlice";

interface Props {
    latestDate: string
}

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1
    }
}))

const Header: React.FC<Props> = props => {

    // 使用準備
    const classes = useStyles();

    // store/stateからデータを取得
    const isLoading = useSelector(selectIsLoading);

    return (
        <AppBar position={"absolute"}>
            <Toolbar>
                <Typography variant={"h6"} className={classes.title}>
                    COVID 19 Live DashBoard
                </Typography>
                <div>
                    <Typography variant={"body1"}>
                        {isLoading ? '' : 'UpdateDate: ' + props.latestDate}
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;