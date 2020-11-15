import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 25,
        height: 720,
        width: "100%",
        backgroundColor : "#f4f4f2"
    },
    card: {
        height: "auto",
        width: "100%",
        marginTop: 25,
        backgroundColor:"#e8e8e8",
        color:"#495464"
    },
    title: {
        paddingTop: '25px',
    },
    banner: {
        height: 600,
        width: "100%",
        backgroundImage: `url("images/recruit.1.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    },
    question: {
        height: 100,
        width: 100,
    }
}));

const QuestionDialog = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <img src={"images/question.gif"} className={classes.question} onClick={handleClickOpen}/>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"相关说明"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        公会不支持跨服，不报销机票，不设置招募群，请有信心加入公会再申请,谢谢合作！
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        另：每个人每个阶段对这个游戏的追求不同，没有对错，只有是否适合自己，对于现阶段的我们来讲，进度和装备只是一时的，我们所希望的就是能够尽自己的力量完成到最好。
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        我们这里是一个比较多元化的公会，有欧洲、美洲、澳洲和国内玩家；有多个版本回归的大佬，也不乏从怀旧回来的，和一些刚刚踏入魔兽世界的新朋友，希望每一个人都可以彼此真诚相待，不骄不躁，踏实热情，为了艾泽拉斯的和平，和睦相处。
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const RecruitCard = (props) => {
    const classes = useStyles();
    const {name, time, content} = props;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="textSecondary" component="p">
                        {time}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}


export default function Recruit() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                招募
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.banner}>
                        <QuestionDialog/>
                    </Paper>
                </Grid>
                <Grid item xs={7}>
                    <RecruitCard name={"树色 | 晚间团"} time={"每周两天 服务器时间周六周日晚上21:00-23:00。"} content={"全职业招募。"}/>
                    <RecruitCard name={"美西 | 白天团"} time={"每周两天 服务器时间周六周日上午9:00-11：00。"} content={"全职业招募。"}/>
                    <RecruitCard name={"午夜 | 欧洲团"} time={"每周三天，服务器时间周二三四(暂定)凌晨2：00-5：00。"} content={"全职业招募。午夜团新团组建。"}/>
                    <RecruitCard name={"闲园 | 下午团"} time={"每周三天，服务器时间周四一二下午14:00-17:00。"} content={"公会进度团。全职业招募。"}/>
                </Grid>
            </Grid>

        </div>
    );
}