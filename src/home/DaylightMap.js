import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {WorldDaylightMap} from "world-daylight-map";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 600,
    },
}));


export default function DaylightMap() {
    const classes = useStyles();
    // const [pos, setPos] = useState({lat:0,lng:0});
    const positions = [{"lat": 40.4173,"lng":-82.9071},{"lat": 44.6820,"lng":-63.7443},{"lat": 44.4949,"lng":11.3426},{"lat": 42.4072,"lng":-71.3824},{"lat": 40.7128,"lng":-74.0060},{"lng":114.000611,"lat":22.53837844},{"lng":110.524778,"lat":40.56116839},{"lng":114.3115816,"lat":30.59846674},{"lng":113.3298081,"lat":23.13840018},{"lng":106.5946786,"lat":29.62934168},{"lng":117.2035928,"lat":39.15348514},{"lng":121.4805389,"lat":31.23592904},{"lng":120.5344753,"lat":27.57950919},{"lng":114.3818193,"lat":30.51177688},{"lng":114.1370201,"lat":22.55438708},{"lng":116.4658862,"lat":39.92257252},{"lng":113.2714313,"lat":23.13533631},{"lng":113.8992233,"lat":22.56632713},{"lng":114.0228197,"lat":22.6595517},{"lng":116.4133837,"lat":39.91092455},{"lng":121.580162,"lat":29.85401701},{"lng":113.3298081,"lat":23.13840018},{"lng":116.4820053,"lat":39.87677211},{"lng":103.9466542,"lat":30.99077699},{"lng":121.7768916,"lat":39.04690336},{"lng":114.3818193,"lat":30.51177688},{"lng":113.6314192,"lat":34.75343885},{"lng":113.30297,"lat":23.09459435},{"lng":121.1487814,"lat":30.18806268},{"lng":103.9371756,"lat":30.60829384},{"lng":101.6224734,"lat":34.74039607},{"lng":112.5563915,"lat":37.87698903},{"lng":125.3306021,"lat":43.8219535},{"lng":116.0094477,"lat":29.70981422},{"lng":116.0142792,"lat":28.71238384},{"lng":110.3255255,"lat":20.04404944},{"lng":123.7323652,"lat":42.229948},{"lng":120.157129,"lat":33.3476261},{"lng":113.9974305,"lat":22.53581127},{"lng":108.9464656,"lat":34.34726882},{"lng":113.0677472,"lat":23.03670053},{"lng":106.1711695,"lat":38.46445335},{"lng":114.3818193,"lat":30.51177688},{"lng":118.920409,"lat":32.08406002},{"lng":119.3966554,"lat":32.35535748},{"lng":120.2155118,"lat":30.25308298},{"lng":113.9974305,"lat":22.53581127},{"lng":108.9464656,"lat":34.34726882},{"lng":118.920409,"lat":32.08406002},{"lng":116.3725136,"lat":39.91812361},{"lng":113.002787,"lat":28.18619298},{"lng":120.3919836,"lat":31.64214013},{"lng":104.0815335,"lat":30.65582188},{"lng":126.5556345,"lat":43.84356783},{"lng":121.5115865,"lat":31.2697467},{"lng":117.265838,"lat":31.884584},{"lng":121.6216315,"lat":38.91895367},{"lng":120.3894552,"lat":36.0722275},{"lng":121.4499776,"lat":31.28722936},{"lng":121.4915856,"lat":31.23724715},{"lng":108.3734508,"lat":22.8226066},{"lng":119.491506,"lat":31.42210229},{"lng":101.6224734,"lat":34.74039607},{"lng":117.2905754,"lat":34.21266655},{"lng":120.2647294,"lat":23.0309091},{"lng":121.4805389,"lat":31.23592904},{"lng":118.5135796,"lat":31.6762656},{"lng":120.3185833,"lat":31.49880973},{"lng":130.3273591,"lat":46.80568999},{"lng":123.4710966,"lat":41.68383007}];
    const icons = positions.map((p) => {
        return {
            iconUrl: 'images/location.png',
            iconCoord: p,
            iconToSvgWidthRatio: 1 / 10,
            iconWidth: 25, // Overrides iconToSvgWidthRatio
            iconHeight: 25, // Overrides iconToSvgWidthRatio
        }
    });

    return (
        <WorldDaylightMap
            className={classes.root}
            key={0}
            options={{
                width: '100%',
                height: 600,
                controlsPosition: 'outer-top',
                controlsScale: 1.0,
                font: "'Roboto', sans-serif",
                fontSize: undefined,
                isSunshineDisplayed: true,
                icons: icons,
                // icons: [
                //     {
                //         iconUrl: 'horde_banner.png',
                //         iconCoord: { lat: 51.507222, lng: 0.1278 },
                //         // iconLink: '#',
                //         iconToSvgWidthRatio: 1 / 10,
                //         iconWidth: 20, // Overrides iconToSvgWidthRatio
                //         iconHeight: 20, // Overrides iconToSvgWidthRatio
                //     },
                //     {
                //         iconLabel: '美西',
                //         iconUrl: 'horde_banner.png',
                //         iconCoord: { lat: 37.7749, lng: 122.4194 },
                //         // iconLink: '#',
                //         iconToSvgWidthRatio: 1 / 10,
                //         iconWidth: 100, // Overrides iconToSvgWidthRatio
                //         iconHeight: 100, // Overrides iconToSvgWidthRatio
                //     },
                //     {
                //         iconLabel: '闲园',
                //         iconUrl: 'horde_banner.png',
                //         iconCoord: { lat: 42.3601, lng: 71.0589 },
                //         // iconLink: '#',
                //         iconToSvgWidthRatio: 1 / 10,
                //         iconWidth: 100, // Overrides iconToSvgWidthRatio
                //         iconHeight: 100, // Overrides iconToSvgWidthRatio
                //     },
                //     {
                //         iconLabel: '树色',
                //         iconUrl: 'horde_banner.png',
                //         iconCoord: { lat: 39.9042, lng: 116.4074 },
                //         // iconLink: '#',
                //         iconToSvgWidthRatio: 1 / 10,
                //         iconWidth: 100, // Overrides iconToSvgWidthRatio
                //         iconHeight: 100, // Overrides iconToSvgWidthRatio
                //     },
                // ],
            }}/>
    );
}