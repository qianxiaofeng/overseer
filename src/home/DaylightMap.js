import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {WorldDaylightMap} from "world-daylight-map";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 400,
    },
}));



export default function DaylightMap() {
    const classes = useStyles();
    // const [pos, setPos] = useState({lat:0,lng:0});

    return (
        <WorldDaylightMap
            className={classes.root}
            key={0}
            options={{
                width: '100%',
                height: 400,
                controlsPosition: 'outer-top',
                controlsScale: 1.0,
                font: "'Roboto', sans-serif",
                fontSize: undefined,
                isSunshineDisplayed: true,
                icons: [
                    {
                        iconLabel: '欧洲',
                        iconUrl: 'horde_banner.png',
                        iconCoord: { lat: 51.507222, lng: 0.1278 },
                        // iconLink: '#',
                        iconToSvgWidthRatio: 1 / 10,
                        iconWidth: 100, // Overrides iconToSvgWidthRatio
                        iconHeight: 100, // Overrides iconToSvgWidthRatio
                    },
                    {
                        iconLabel: '美西',
                        iconUrl: 'horde_banner.png',
                        iconCoord: { lat: 37.7749, lng: 122.4194 },
                        // iconLink: '#',
                        iconToSvgWidthRatio: 1 / 10,
                        iconWidth: 100, // Overrides iconToSvgWidthRatio
                        iconHeight: 100, // Overrides iconToSvgWidthRatio
                    },
                    {
                        iconLabel: '闲园',
                        iconUrl: 'horde_banner.png',
                        iconCoord: { lat: 42.3601, lng: 71.0589 },
                        // iconLink: '#',
                        iconToSvgWidthRatio: 1 / 10,
                        iconWidth: 100, // Overrides iconToSvgWidthRatio
                        iconHeight: 100, // Overrides iconToSvgWidthRatio
                    },
                    {
                        iconLabel: '树色',
                        iconUrl: 'horde_banner.png',
                        iconCoord: { lat: 39.9042, lng: 116.4074 },
                        // iconLink: '#',
                        iconToSvgWidthRatio: 1 / 10,
                        iconWidth: 100, // Overrides iconToSvgWidthRatio
                        iconHeight: 100, // Overrides iconToSvgWidthRatio
                    },
                ],
            }} />
    );
}