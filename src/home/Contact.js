import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        width: '100%',
        backgroundColor: "#f1f6f9",
        color: "#14274e"
    },
    contactCard: {
        height: 300,
        width: "auto",
    },
    contactImage: {
        height: 400,
        width: "auto",
    },
    description: {
        textAlign: "left",
        marginTop: 25,
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

    return (
        <div>
            <img className={classes.contactCard} src={"images/contact_card.jpg"} alt={"contact_card"}
                 onClick={handleClickOpen}/>
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
            <br/>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <ContactCard/>
                </Grid>
                <Grid item xs={7} className={classes.description}>
                    <h2>那么如果你是：</h2>
                    <p> 留恋国服的海外党；</p>
                    <p> 不想参与活动的休闲党；</p>
                    <p>幻化成就坐骑爱好党；</p>
                    <p>回归的夕阳红；</p>
                    <p> 发呆的萌新；</p>
                    <p>新版本打算专职PVP的冒险党；</p>
                    <p> 以及想在9.0版本有所作为的团本爱好者；</p>
                    <p>每周只能上线两天的奶爸奶妈；</p>
                    <p>和工作日午夜可以上线的特殊玩家：</p>
                    <h3>不仅只有9.0，未来的每一个版本都希望可以有你。</h3>
                </Grid>
            </Grid>

        </div>
    );
}