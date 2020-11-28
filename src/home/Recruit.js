import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
    root: {
        height: 900,
        paddingBottom: 8,
        width: "100%",
        backgroundImage: `url(images/wallpaper.1.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    grid: {
        height: "100%",
        width: "100%",
        backgroundColor: "#394867",
        color: "#f1f6f9",
        opacity: 0.75,
        textAlign: "center",
        position:"relative",
        overflow:"hidden"
    },
    gridEmpty: {
        backgroundColor: "#9ba4b4",
        opacity: 0.5,
    },
    gridList: {
        width: "100%",
        height: "auto",
    },
    title: {
        paddingTop: '25px',
    },
    question: {
        height: 120,
        width: 120,
        position: "relative",
        top: 180,
    },
    ribbon: {
        margin: 0,
        padding:0,
        background: "rebeccapurple",
        color: "white",
        // padding: "1 0",
        position: "absolute",
        top: 0,
        right: 0,
        transform: "translateX(30%) translateY(0%) rotate(45deg)",
        transformOrigin: "top left",
        "&:before":{
            right:"100%",
            content: '',
            position: "absolute",
            top:0,
            margin: "0 -1px", /* tweak */
            width: "100%",
            height: "100%",
            background: "rebeccapurple",
        },
        "&:after":{
            left:"100%",
            content: '',
            position: "absolute",
            top:0,
            margin: "0 -1px", /* tweak */
            width: "100%",
            height: "100%",
            background: "rebeccapurple",
        },
    }
}));


const RecruitCard = (props) => {
    const classes = useStyles();
    const {name, time, content, style} = props;

    return (
        <Card className={style}>
            {/*<h1 className={classes.ribbon}>test</h1>*/}
            <CardContent>
                <h1>{name}</h1>
                <h2>{time}</h2>
                <p>{content}</p>
            </CardContent>
        </Card>
    )
}

const RecruitCard2 = (props) => {
    // const classes = useStyles();
    const {name1, time1, content1, name2, time2, content2, style} = props;

    return (
        <Card className={style}>
            <CardContent>
                <h1>{name1}</h1>
                <h2>{time1}</h2>
                <p>{content1}</p>
                <br/>
                <h1>{name2}</h1>
                <h2>{time2}</h2>
                <p>{content2}</p>
            </CardContent>
        </Card>
    )
}


export default function Recruit() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={300} className={classes.gridList} cols={2}>
                <GridListTile cols={1}>
                    <RecruitCard style={classes.grid} name={"树色 | 晚间一团"}
                                 time={"每周两天，服务器时间周六日晚上21:00-23:00。(海外玩家请自行换算时差)"} content={"(开荒期间会有加班) 全职业招募。"}/>
                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard style={classes.grid} name={"树色 | 晚间二团"}
                                 time={"每周三天，服务器时间周四六日晚上20:00-23:00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班) 进度团，全职业招募强力玩家。"}/>
                </GridListTile>
            </GridList>
            <GridList cellHeight={300} className={classes.gridList} cols={2}>
                <GridListTile cols={1}>
                    <RecruitCard style={classes.grid} name={"美西 | 白天一团"}
                                 time={"每周两天 服务器时间周六日上午9:00-11：00。(海外玩家请自行换算时差)"} content={"(开荒期间会有加班)"}/>*/}

                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard style={classes.grid} name={"美西 | 白天二团"}
                                 time={"每周三天 服务器时间周五六日上午8:30-11：30。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班) 进度团，全职业招募强力玩家。"}/>*/}
                </GridListTile>
            </GridList>
            <GridList cellHeight={300} className={classes.gridList} cols={2}>
                <GridListTile cols={1}>
                    <RecruitCard style={classes.grid} name={"午夜 | 欧洲团"}
                                 time={"每周三天，服务器时间周二三四(暂定)凌晨2：00-5：00。(海外玩家请自行换算时差)"} content={"(开荒期间会有加班) 全职业招募。"}/>
                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard style={classes.grid} name={"闲园 | 下午团"}
                                 time={"每周三天，服务器时间周四一二下午14:00-17:00。(海外玩家请自行换算时差)"}
                                 content={"(加班期间为四天) 招募指挥，招募强力玩家。"}/>
                </GridListTile>
            </GridList>
        </div>
    );
}