import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        width: '100%',
        paddingTop: 25,
        backgroundColor: "#bbbfca",
        color:"#495464"
    },
    contactCard: {
        height: 300,
        width: "auto",
    },
    contactImage:{
        height: 400,
        width:"auto",
    },
    description:{
        textAlign:"left",
        paddingTop: 25,
        marginLeft: 50,
    }
}));

const ContactCard = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <img className={classes.contactCard} src={"images/contact_card.jpg"} alt={"contact_card"} onClick={handleClickOpen}/>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <img className={classes.contactImage} src={"images/contact.jpg"} alt={"contact"}/>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                联系
            </Typography>
            <br/>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <ContactCard/>
                </Grid>
                <Grid item xs={7} className={classes.description}>
                    <Typography display={"inline-block"} variant="p" component="p">
                        那么如果你是：
                    </Typography>
                    <br/>
                    <Typography display={"inline-block"} variant="p" component="p">
                        留恋国服的海外党；
                    </Typography>
                    <Typography display={"inline-block"} variant="p" component="p">
                        不想参与活动的休闲党；
                    </Typography>
                    <Typography display={"inline-block"} variant="p" component="p">
                        幻化成就坐骑爱好党；
                    </Typography>
                    <Typography display={"inline-block"} variant="p" component="p">
                        回归的夕阳红；
                    </Typography>
                    <Typography display={"inline-block"} variant="p" component="p">
                        发呆的萌新；
                    </Typography>
                    <Typography display={"inline-block"} variant="p" component="p">
                        新版本打算专职PVP的冒险党；
                    </Typography>
                    <Typography display={"inline-block"} variant="p" component="p">
                        以及想在9.0版本有所作为的团本爱好者；
                    </Typography>
                    <Typography display={"inline-block"} variant="p" component="p">
                        每周只能上线两天的奶爸奶妈；
                    </Typography>
                    <Typography display={"inline-block"} variant="p" component="p">
                        和工作日午夜可以上线的特殊玩家：
                    </Typography>
                    <br/>
                    <Typography display={"inline-block"} variant="p" component="p">
                        不仅只有9.0，未来的每一个版本都希望可以有你。
                    </Typography>

                </Grid>
            </Grid>

        </div>
    );
}