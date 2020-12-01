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
            background: "rebeccapurple",
        },
        "& span": {
            position: 'absolute',
            display: 'block',
            width: 225,
            padding: "15 0",
            left: -25,
            top: 30,
            transform: "rotate(45deg)",
            backgroundColor: "rebeccapurple",
            color: "#fff",
            textShadow: "0 1 1 rgba(0,0,0,.2)",
            textAlign: "center",
        },
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
        marginLeft:"12.5%",
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
    const bosses = ["啸翼","猎手阿尔迪莫","太阳之王的救赎","圣物匠赛*墨克斯",
        "饥饿的毁灭者","伊涅瓦*暗脉女勋爵","猩红议会","泥拳","顽石军团干将","德纳修斯大帝"]

    return (
        <div>
            <div className={classes.progressBarLine}></div>
            <Grid container spacing={0} className={classes.progressBarGridContainer}>
                <Grid item xs={1} className={classes.progressBarGrid}/>
                {progress.map((v, i) => {
                    let tooltip = bosses[i] + " | ";
                    tooltip += v==0?"未击杀" : "已击杀";
                    let imgFileName = `images/raid/nathria/${i+1}`;
                    imgFileName += v==0?".png":"x.png";
                    return (
                    <Grid item xs={1} className={classes.progressBarGrid}>
                        <Tooltip title={tooltip} arrow placement="top">
                        <img className={classes.progressBarImg} src={imgFileName} alt={""}/>
                        </Tooltip>
                    </Grid>
                    )})}
                <Grid item xs={1} className={classes.progressBarGrid}/>
            </Grid>
        </div>
    )
}

const RecruitCard = (props) => {
    const classes = useStyles();
    const {name, time, content, groupId = "", timestamp = 0, leader = "", leaderClassImg = "images/class/class_mage.jpg", isPro = false} = props;

    return (
        <Card className={classes.grid}>
            {isPro && <h3 className={classes.ribbon}><span>进度团</span></h3>}
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
                <RaidProgressBar/>
            </CardContent>
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
                                 time={"每周两天，服务器时间周六日晚上21:00-23:00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班) 全职业招募。"}
                                 groupId={"壹"}
                                 leader={"叫我圆圆吧"}
                                 leaderClassImg={"images/class/class_monk.jpg"}
                                 timestamp={1607778000}
                    />
                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard name={"树色 | 晚间二团"}
                                 time={"每周三天，服务器时间周四六日晚上20:00-23:00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班) 全职业招募强力玩家。"}
                                 isPro={true}
                                 groupId={"伍"}
                                 leader={"月光茉莉哑"}
                                 leaderClassImg={"images/class/class_warlock.jpg"}
                                 timestamp={1607601600}
                    />
                </GridListTile>
            </GridList>
            <GridList cellHeight={"auto"} className={classes.gridList} cols={2}>
                <GridListTile cols={1}>
                    <RecruitCard name={"美西 | 白天一团"}
                                 time={"每周两天 服务器时间周六日上午9:00-11：00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班)"}
                                 groupId={"贰"}
                                 leader={"苍云之吻"}
                                 leaderClassImg={"images/class/class_demonhunter.jpg"}
                                 timestamp={1607734800}
                    />
                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard name={"美西 | 白天二团"}
                                 time={"每周三天 服务器时间周五六日上午8:30-11：30。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班) 全职业招募强力玩家。"}
                                 isPro={true}
                                 groupId={"陆"}
                                 leader={"业之子"}
                                 leaderClassImg={"images/class/class_mage.jpg"}
                                 timestamp={1607646600}
                    />
                </GridListTile>
            </GridList>
            <GridList cellHeight={"auto"} className={classes.gridList} cols={2}>
                <GridListTile cols={1}>
                    <RecruitCard name={"午夜 | 欧洲一团"}
                                 time={"每周两天，服务器时间周二三凌晨2：00-5：00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班) 全职业招募。"}
                                 groupId={"叁"}
                                 leader={"希序弗斯"}
                                 leaderClassImg={"images/class/class_hunter.jpg"}
                                 timestamp={1607968800}
                    />
                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard name={"午夜 | 欧洲二团"}
                                 time={"每周三天，服务器时间周一二三凌晨2：00-5：00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班) 全职业招募强力玩家。招募指挥，管理人员"}
                                 isPro={true}
                                 groupId={"捌"}
                                 leader={"暂无"}
                                 leaderClassImg={""}
                                 timestamp={1607882400}
                    />
                </GridListTile>
            </GridList>
            <GridList cellHeight={"auto"} className={classes.gridList} cols={2}>
                <GridListTile cols={1}>
                    <RecruitCard name={"闲园 | 下午团"}
                                 time={"每周三天，服务器时间周四一二下午14:00-17:00。(海外玩家请自行换算时差)"}
                                 content={"(加班期间为四天) 招募指挥，招募强力玩家，大米爱好者。"}
                                 isPro={true}
                                 groupId={"肆"}
                                 leader={"神韵地煞"}
                                 leaderClassImg={"images/class/class_mage.jpg"}
                                 timestamp={1607580000}
                    />
                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard name={"美东 | 上午团"}
                                 time={"每周三天，服务器时间周二三四上午9:00-11:30。(海外玩家请自行换算时差)"}
                                 content={"(加班期间为四天) 全职业招募。急招指挥，管理人员。欢迎强力回归等玩家。"}
                                 isPro={true}
                                 groupId={"柒"}
                                 leader={"Vizone"}
                                 leaderClassImg={"images/class/class_demonhunter.jpg"}
                                 timestamp={1607562000}
                    />
                </GridListTile>
            </GridList>
        </div>
    );
}