import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: '100%',
        backgroundImage: `url(images/wallpaper.1.jpg)`,
        backgroundSize: 'cover',
        opacity: 1,
    },
    title: {
        // paddingTop: 25,
        paddingLeft:25,
        color: 'white',
        writingMode: "vertical-rl",
        textOrientation: "upright",
        textAlign: "center",
    },
    content: {
        paddingTop: 10,
        color: "white",
        textAlign: "center",
    }
}));

export default function Introduction() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={1}>
                    <Typography variant="h4" className={classes.title}>
                        云笺不许千金诺
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="h4" className={classes.title}>
                        细水长流一世安
                    </Typography>
                </Grid>
                {/*<Grid item xs={10}>*/}
                {/*    <Container className={classes.content}>*/}
                {/*        <Typography variant="h6" className={classes.content}>*/}
                {/*            海外时差党，寻找同我们一样对国服的帐号充满留恋和怀念；*/}
                {/*        </Typography>*/}
                {/*        <Typography variant="h6" className={classes.content}>*/}
                {/*            又或者你是国服玩家，大公会跟不上进度，曾经的公会又灰的只剩下自己；*/}
                {/*        </Typography>*/}
                {/*        <Typography variant="h6" className={classes.content}>*/}
                {/*            还有因为工作、家庭、奶娃占据了大量时间，心有引领潮流的宏愿却被现实拉跨的奶爸奶妈：*/}
                {/*        </Typography>*/}
                {/*        <Typography variant="h6" className={classes.content}>*/}
                {/*            我在死亡之翼、部落阵营、《细水长流一世安》24小时公会，等你们一起来。*/}
                {/*        </Typography>*/}
                {/*    </Container>*/}
                {/*</Grid>*/}
            </Grid>
        </div>
    );
}