import React, {useRef, useState, useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Avatar from '@material-ui/core/Avatar';
import {deepOrange} from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
    root: {
        height: "auto",
        // paddingBottom: 8,
        backgroundImage: `url(images/wallpaper.1.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    grid: {
        height: "100%",
        backgroundColor: "#394867",
        color: "#f1f6f9",
        opacity: 0.75,
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
    },
    gridList: {
        height: "auto",
    },
    gridHeader: {
        // display: "flex",
        // justifyContent: "space-between",
    },
    adImage:{
      width:"100%",
      objectFit:"contain",
    },
    alignLeft: {
        display: "flex",
        float: "left",
    },
    alignRight: {
        display: "flex",
        textAlign: "right",
        float: "right",
    },
    clear: {
        clear: "both",
    },
    strikeTrough: {
        textDecoration: "line-through",
        opacity: 0.4,
    },
    ribbon: {
        top: -30,
        right: -30,
        width: 150,
        height: 150,
        overflow: "hidden",
        position: "absolute",
        "&::before, &::after": {
            position: "absolute",
            zIndex: -1,
            content: '',
            display: 'block',
            background: "#c4c1c0",
        },
        "& span": {
            position: 'absolute',
            display: 'block',
            width: 225,
            padding: "15 0",
            left: -25,
            top: 30,
            transform: "rotate(45deg)",
            color: "#212121",
            textShadow: "0 1 1 rgba(0,0,0,.2)",
            textAlign: "center",
        },
        "& span img": {
            maxHeight: "100%",
            marginTop: 5,
            width: "auto",
            objectFit: "contain"
        }
    },
    bgSilver: {
        backgroundColor: "#c4c1c0",
    },
    bgGold: {
        backgroundColor: "#e3b430",
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    progressBarGridContainer: {
        height: 45,
    },
    progressBarGrid: {
        height: 45,
    },
    progressBarImg: {
        height: "100%",
        // width:"100%",
        objectFit: "cover",
    },
    progressBarLine: {
        width: "72.5%",
        height: 3,
        background: "orange",
        position: "absolute",
        marginTop: 22,
        marginLeft: "12.5%",
        zIndex: -1,
    }
}));

export const CountDown = ({timestamp}) => {
    const divRef = useRef();
    const tickRef = useRef();
    const initCountDownSeconds = Math.floor(timestamp - Date.now() / 1000);

    const [countDownSeconds, setCountDownSeconds] = useState(initCountDownSeconds);

    const cal_remaining = (countDownSeconds) => {
        const days = Math.floor(countDownSeconds / (3600 * 24));
        const hours = ("0" + Math.floor(countDownSeconds % (3600 * 24) / (3600))).slice(-2);
        const minutes = ("0" + Math.floor(countDownSeconds % (3600) / 60)).slice(-2);
        const seconds = ("0" + Math.floor(countDownSeconds % (60))).slice(-2);

        return `${days} ${hours}:${minutes}:${seconds}`;
    }

    useEffect(() => {
        const currDiv = divRef.current;
        const didInit = tick => {
            tickRef.current = tick;
        };
        Tick.DOM.create(currDiv, {
            countDownSeconds,
            didInit,
            repeat: true,
            view: {
                children: [
                    {
                        root: "div",
                        style: ".tick",
                        repeat: true,
                        children: [
                            {
                                view: "flip"
                            }
                        ]
                    },
                ]
            }
        });
        const tickValue = tickRef.current;
        return () => Tick.DOM.destroy(tickValue);
    });

    useEffect(() => {
        if (tickRef.current) {
            tickRef.current.value = cal_remaining(countDownSeconds);
        }
    }, [countDownSeconds]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDownSeconds(countDownSeconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    },);

    return <div ref={divRef}/>;
};

const RaidProgressBar = ({progress = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}) => {
    const classes = useStyles();
    const bosses = ["啸翼", "猎手阿尔迪莫", "太阳之王的救赎", "圣物匠赛*墨克斯",
        "饥饿的毁灭者", "伊涅瓦*暗脉女勋爵", "猩红议会", "泥拳", "顽石军团干将", "德纳修斯大帝"]

    return (
        <div>
            <div className={classes.progressBarLine}/>
            <Grid container spacing={0} className={classes.progressBarGridContainer}>
                <Grid item xs={1} key={1} className={classes.progressBarGrid}/>
                {progress.map((v, i) => {
                    let tooltip = bosses[i] + " | ";
                    tooltip += v === 0 ? "未击杀" : "已击杀";
                    let imgFileName = `images/raid/nathria/${i + 1}`;
                    imgFileName += v === 0 ? ".png" : "x.png";
                    return (
                        <Grid item xs={1} key={i + 1} className={classes.progressBarGrid}>
                            <Tooltip title={tooltip} arrow placement="top">
                                <img className={classes.progressBarImg} src={imgFileName} alt={""}/>
                            </Tooltip>
                        </Grid>
                    )
                })}
                <Grid item xs={1} key={12} className={classes.progressBarGrid}/>
            </Grid>
        </div>
    )
}

const RecruitCard = (props) => {
    const classes = useStyles();
    const {
        name, time, content, groupId = "",
        timestamp = 0, leader = "", leaderClassImg = "images/class/class_mage.jpg",
        isHeroic = false, isMythic = false, progress = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    } = props;

    return (
        <Card className={classes.grid}>
            {isHeroic &&
            <h3 className={classes.ribbon}><span className={classes.bgSilver}><img
                src={"/images/raid/Icon-heroic-22x22.png"} alt={"heroic"}/></span>
            </h3>}
            {isMythic &&
            <h3 className={classes.ribbon}><span className={classes.bgGold}><img
                src={"/images/raid/Icon-mythic-22x22.png"} alt={"mystic"}/></span>
            </h3>}
            <div className={`${classes.gridHeader} `}>
                <div className={`${classes.alignLeft}`}>
                    <Avatar className={`${classes.orange}`}>{groupId}</Avatar>
                    <Chip
                        avatar={<Avatar src={leaderClassImg}/>}
                        label={leader}
                        variant={"outlined"}
                    />
                    {timestamp > Date.now() / 1000 && <CountDown timestamp={timestamp}/>}
                </div>
                <div className={classes.alignRight}>

                </div>
                <div className={classes.clear}/>
            </div>
            <CardContent>
                <Typography variant={"h4"}>{name}</Typography>
                <Typography variant={"h5"}>{time}</Typography>
                <Typography variant={"h6"}>{content}</Typography>
                <RaidProgressBar progress={progress}/>
            </CardContent>
        </Card>
    )
}

const AdCard = (props) => {
    const classes = useStyles();
    const {adType = 1} = props;
    return (
        <Card className={classes.grid}>
            {adType===1 && <img className={classes.adImage} src={"/images/raid/recruit.jpg"} alt={"recruit"}/>}
            {adType===2 && <img className={classes.adImage} src={"/images/raid/bignews.jpg"} alt={"bignews"}/>}
        </Card>
    )
}


export default function Recruit() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={"auto"} className={classes.gridList} cols={2}>
                <GridListTile cols={1}>
                    <RecruitCard name={"树色 | 晚间一团"}
                                 time={"每周两天，服务器时间周六日晚上20:00-23:00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班)"}
                                 groupId={"壹"}
                                 isMythic
                                 leader={"月光茉莉哑"}
                                 leaderClassImg={"images/class/class_warlock.jpg"}
                                 timestamp={1608984000}
                                 progress={[1, 1, 1, 1, 1, 1, 0, 0, 0, 0]}
                    />
                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard name={"午夜 | 欧洲二团"}
                                 time={"每周四天，服务器时间周五一二三凌晨0：30-4：30。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班)"}
                                 groupId={"贰"}
                                 isMythic
                                 leader={"迈克华莱士"}
                                 leaderClassImg={"images/class/class_warrior.jpg"}
                                 timestamp={1608832800}
                                 progress={[1, 1, 1, 1, 1, 1, 0, 0, 0, 0]}
                    />
                </GridListTile>
            </GridList>
            <GridList cellHeight={"auto"} className={classes.gridList} cols={2}>
                <GridListTile cols={1}>
                    <RecruitCard name={"美西 | 白天一团"}
                                 time={"每周两天 服务器时间周六日上午9:00-11：00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班)"}
                                 groupId={"叁"}
                                 isMythic
                                 leader={"苍云之吻"}
                                 leaderClassImg={"images/class/class_demonhunter.jpg"}
                                 timestamp={1609547400}
                                 progress={[1, 1, 0, 0, 0, 0, 0, 0, 0, 0]}
                    />
                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard name={"美东 | 上午一团"}
                                 time={"每周三天，服务器时间周四五一上午8:30-11:30。"}
                                 content={"(全新招募虚位以待 另招指挥及管理人员)"}
                                 groupId={"肆"}
                                 isMythic
                                 leader={"璟行行芷"}
                                 leaderClassImg={"images/class/class_deathknight.jpg"}
                                 progress={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                                 timestamp={1608771600}
                    />
                </GridListTile>
            </GridList>
            <GridList cellHeight={"auto"} className={classes.gridList} cols={2}>
                <GridListTile cols={1}>
                    <AdCard adType={1}/>
                </GridListTile>
                <GridListTile cols={1}>
                    <AdCard adType={2}/>
                </GridListTile>
            </GridList>
        </div>
    );
}