import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        height: 1200,
        paddingBottom: 8,
        // width: "100%",
        backgroundImage: `url(images/wallpaper.1.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    grid: {
        height: "100%",
        // width: "100%",
        backgroundColor: "#394867",
        color: "#f1f6f9",
        opacity: 0.75,
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
    },
    gridList: {
        // width: "100%",
        height: "auto",
    },

    ribbon: {
        top: -30,
        right: -30,
        // marginLeft:"45%",
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
}));


const RecruitCard = (props) => {
    const classes = useStyles();
    const {name, time, content, groupId = "", isPro = false} = props;

    return (
        <Card className={classes.grid}>
            {isPro && <h3 className={classes.ribbon}><span>进度团</span></h3>}
            <CardContent>
                <h1> <Avatar className={classes.orange}>{groupId}</Avatar> {name}</h1>
                <h2>{time}</h2>
                <p>{content}</p>
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
                    <RecruitCard name={"树色 | 晚间一团"}
                                 time={"每周两天，服务器时间周六日晚上21:00-23:00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班) 全职业招募。"}
                                 groupId = {"壹"}
                    />
                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard name={"树色 | 晚间二团"}
                                 time={"每周三天，服务器时间周四六日晚上20:00-23:00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班) 全职业招募强力玩家。"}
                                 isPro={true}
                                 groupId = {"伍"}
                    />
                </GridListTile>
            </GridList>
            <GridList cellHeight={300} className={classes.gridList} cols={2}>
                <GridListTile cols={1}>
                    <RecruitCard name={"美西 | 白天一团"}
                                 time={"每周两天 服务器时间周六日上午9:00-11：00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班)"}
                                 groupId = {"贰"}
                    />
                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard name={"美西 | 白天二团"}
                                 time={"每周三天 服务器时间周五六日上午8:30-11：30。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班) 全职业招募强力玩家。"}
                                 isPro={true}
                                 groupId = {"陆"}
                    />
                </GridListTile>
            </GridList>
            <GridList cellHeight={300} className={classes.gridList} cols={2}>
                <GridListTile cols={1}>
                    <RecruitCard name={"午夜 | 欧洲一团"}
                                 time={"每周两天，服务器时间周二三凌晨2：00-5：00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班) 全职业招募。"}
                                 groupId = {"叁"}
                    />
                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard name={"午夜 | 欧洲二团"}
                                 time={"每周三天，服务器时间周一二三凌晨2：00-5：00。(海外玩家请自行换算时差)"}
                                 content={"(开荒期间会有加班) 全职业招募强力玩家。招募指挥，管理人员"}
                                 isPro={true}
                                 groupId = {"捌"}
                    />
                </GridListTile>
            </GridList>
            <GridList cellHeight={300} className={classes.gridList} cols={2}>
                <GridListTile cols={1}>
                    <RecruitCard name={"闲园 | 下午团"}
                                 time={"每周三天，服务器时间周四一二下午14:00-17:00。(海外玩家请自行换算时差)"}
                                 content={"(加班期间为四天) 招募指挥，招募强力玩家，大米爱好者。"}
                                 isPro={true}
                                 groupId = {"肆"}
                    />
                </GridListTile>
                <GridListTile cols={1}>
                    <RecruitCard name={"美东 | 上午团"}
                                 time={"每周三天，服务器时间周二三四上午9:00-11:30。(海外玩家请自行换算时差)"}
                                 content={"(加班期间为四天) 全职业招募。急招指挥，管理人员。欢迎强力回归等玩家。"}
                                 isPro={true}
                                 groupId = {"柒"}
                    />
                </GridListTile>
            </GridList>
        </div>
    );
}