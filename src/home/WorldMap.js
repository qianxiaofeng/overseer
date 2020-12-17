import React, {useEffect, useRef, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {select} from 'd3';
import {geoPath, geoEquirectangular, geoCircle, geoOrthographic} from 'd3-geo';
import {timer} from 'd3';
import {feature} from 'topojson';
import * as solar from 'solar-calculator'

const useStyles = makeStyles((theme) => ({
    root: {
    },
}));



const WorldMap = ({isFlat=false,isFull=false, width=900}) => {
    const height = width/640*320;
    const scaleRatio = isFull? (width/640)*100 : width;

    const projection = isFlat? geoEquirectangular().scale((width/640)*100).translate([width / 2, height / 2]) :geoOrthographic().scale(scaleRatio).translate([width / 2, height / 2]);
    const geoGenerator = geoPath()
        .projection(projection);
    const classes = useStyles();
    const ref = useRef();
    const [geographies, setGeographies] = useState([]);
    // const locations = [{"lat":40.4173,"lng":-82.9071},{"lat":44.6820,"lng":-63.7443},{"lat":44.4949,"lng":11.3426},{"lat":42.4072,"lng":-71.3824},{"lat":40.7128,"lng":-74.0060},{"lng":114.000611,"lat":22.53837844},{"lng":110.524778,"lat":40.56116839},{"lng":114.3115816,"lat":30.59846674},{"lng":113.3298081,"lat":23.13840018},{"lng":106.5946786,"lat":29.62934168},{"lng":117.2035928,"lat":39.15348514},{"lng":121.4805389,"lat":31.23592904},{"lng":120.5344753,"lat":27.57950919},{"lng":114.3818193,"lat":30.51177688},{"lng":114.1370201,"lat":22.55438708},{"lng":116.4658862,"lat":39.92257252},{"lng":113.2714313,"lat":23.13533631},{"lng":113.8992233,"lat":22.56632713},{"lng":114.0228197,"lat":22.6595517},{"lng":116.4133837,"lat":39.91092455},{"lng":121.580162,"lat":29.85401701},{"lng":113.3298081,"lat":23.13840018},{"lng":116.4820053,"lat":39.87677211},{"lng":103.9466542,"lat":30.99077699},{"lng":121.7768916,"lat":39.04690336},{"lng":114.3818193,"lat":30.51177688},{"lng":113.6314192,"lat":34.75343885},{"lng":113.30297,"lat":23.09459435},{"lng":121.1487814,"lat":30.18806268},{"lng":103.9371756,"lat":30.60829384},{"lng":101.6224734,"lat":34.74039607},{"lng":112.5563915,"lat":37.87698903},{"lng":125.3306021,"lat":43.8219535},{"lng":116.0094477,"lat":29.70981422},{"lng":116.0142792,"lat":28.71238384},{"lng":110.3255255,"lat":20.04404944},{"lng":123.7323652,"lat":42.229948},{"lng":120.157129,"lat":33.3476261},{"lng":113.9974305,"lat":22.53581127},{"lng":108.9464656,"lat":34.34726882},{"lng":113.0677472,"lat":23.03670053},{"lng":106.1711695,"lat":38.46445335},{"lng":114.3818193,"lat":30.51177688},{"lng":118.920409,"lat":32.08406002},{"lng":119.3966554,"lat":32.35535748},{"lng":120.2155118,"lat":30.25308298},{"lng":113.9974305,"lat":22.53581127},{"lng":108.9464656,"lat":34.34726882},{"lng":118.920409,"lat":32.08406002},{"lng":116.3725136,"lat":39.91812361},{"lng":113.002787,"lat":28.18619298},{"lng":120.3919836,"lat":31.64214013},{"lng":104.0815335,"lat":30.65582188},{"lng":126.5556345,"lat":43.84356783},{"lng":121.5115865,"lat":31.2697467},{"lng":117.265838,"lat":31.884584},{"lng":121.6216315,"lat":38.91895367},{"lng":120.3894552,"lat":36.0722275},{"lng":121.4499776,"lat":31.28722936},{"lng":121.4915856,"lat":31.23724715},{"lng":108.3734508,"lat":22.8226066},{"lng":119.491506,"lat":31.42210229},{"lng":101.6224734,"lat":34.74039607},{"lng":117.2905754,"lat":34.21266655},{"lng":120.2647294,"lat":23.0309091},{"lng":121.4805389,"lat":31.23592904},{"lng":118.5135796,"lat":31.6762656},{"lng":120.3185833,"lat":31.49880973},{"lng":130.3273591,"lat":46.80568999},{"lng":123.4710966,"lat":41.68383007}];
    const locations = [{"lat":40.4173,"lng":-82.9071},{"lat":44.682,"lng":-63.7443},{"lat":22.53837844,"lng":114.000611},{"lat":40.66292879,"lng":109.8465435},{"lat":30.59846674,"lng":114.3115816},{"lat":51.4556,"lng":7.0116},{"lat":44.4949,"lng":11.3426},{"lat":56.1304,"lng":-106.3468},{"lat":39.9417481,"lng":119.6085306},{"lat":31.23592904,"lng":121.4805389},{"lat":27.57950919,"lng":120.5344753},{"lat":42.4072,"lng":-71.3824},{"lat":36.7783,"lng":-119.4179},{"lat":40.7128,"lng":-74.006},{"lat":43.6532,"lng":-79.3832},{"lat":43.84356783,"lng":126.5556345},{"lat":23.13533631,"lng":113.2714313},{"lat":51.5074,"lng":-0.1278},{"lat":43.6532,"lng":-79.3832},{"lat":52.0686,"lng":-0.6087},{"lat":39.91092455,"lng":116.4133837},{"lat":45.4642,"lng":9.19},{"lat":49.3988,"lng":8.6724},{"lat":47.6062,"lng":-122.3321},{"lat":35.0078,"lng":-97.0929},{"lat":36.7783,"lng":-119.4179},{"lat":34.0522,"lng":-118.2437},{"lat":36.7783,"lng":-119.4179},{"lat":34.75343885,"lng":113.6314192},{"lat":35.6804,"lng":139.769},{"lat":29.86603305,"lng":121.6285725},{"lat":30.65582188,"lng":104.0815335},{"lat":36.7783,"lng":-119.4179},{"lat":34.62426278,"lng":112.4594213},{"lat":37.87698903,"lng":112.5563915},{"lat":43.8219535,"lng":125.3306021},{"lat":29.71134056,"lng":116.0075349},{"lat":28.71238384,"lng":116.0142792},{"lat":20.04404944,"lng":110.3255255},{"lat":42.229948,"lng":123.7323652},{"lat":35.0929,"lng":138.319},{"lat":22.54845664,"lng":114.0645518},{"lat":34.34726882,"lng":108.9464656},{"lat":23.02775875,"lng":113.1285122},{"lat":38.46445335,"lng":106.1711695},{"lat":32.7767,"lng":-96.797},{"lat":30.25308298,"lng":120.2155118},{"lat":32.06465289,"lng":118.8024217},{"lat":32.40067694,"lng":119.4194189},{"lat":30.25308298,"lng":120.2155118},{"lat":29.86603305,"lng":121.6285725},{"lat":23.13794856,"lng":113.2724289},{"lat":34.34726882,"lng":108.9464656},{"lat":1.3521,"lng":103.8198},{"lat":32.06465289,"lng":118.8024217},{"lat":39.91812361,"lng":116.3725136},{"lat":28.2348894,"lng":112.9454732},{"lat":32.06465289,"lng":118.8024217},{"lat":31.49880973,"lng":120.3185833},{"lat":30.65582188,"lng":104.0815335},{"lat":43.84356783,"lng":126.5556345},{"lat":31.2697467,"lng":121.5115865},{"lat":31.73429416,"lng":117.3305404},{"lat":38.91895367,"lng":121.6216315},{"lat":32.06465289,"lng":118.8024217},{"lat":36.0722275,"lng":120.3894552},{"lat":35.9963,"lng":139.4466},{"lat":31.884584,"lng":117.265838},{"lat":31.23724715,"lng":121.4915856},{"lat":22.8226066,"lng":108.3734508},{"lat":31.42210229,"lng":119.491506},{"lat":39.91092455,"lng":116.4133837},{"lat":32.9965622,"lng":112.5345013},{"lat":34.21266655,"lng":117.2905754},{"lat":23.0309091,"lng":120.2647294},{"lat":34.75343885,"lng":113.6314192},{"lat":34.34726882,"lng":108.9464656},{"lat":31.23592904,"lng":121.4805389},{"lat":31.6762656,"lng":118.5135796},{"lat":30.65582188,"lng":104.0815335},{"lat":30.65582188,"lng":104.0815335},{"lat":31.49880973,"lng":120.3185833},{"lat":46.80568999,"lng":130.3273591},{"lat":41.68383007,"lng":123.4710966},{"lat":22.54845664,"lng":114.0645518},{"lat":31.85737822,"lng":117.2664608},{"lat":32.40067694,"lng":119.4194189},{"lat":30.65582188,"lng":104.0815335},{"lat":43.8219535,"lng":125.3306021},{"lat":41.68383007,"lng":123.4710966},{"lat":21.86433973,"lng":111.9884893},{"lat":37.47003838,"lng":121.4544154},{"lat":36.7783,"lng":-119.4179},{"lat":34.62426278,"lng":112.4594213},{"lat":38.8026,"lng":-116.4194},{"lat":38.04831193,"lng":114.5215319},{"lat":39.91092455,"lng":116.4133837},{"lat":31.2697467,"lng":121.5115865},{"lat":31.23592904,"lng":121.4805389},{"lat":39.91092455,"lng":116.4133837},{"lat":54.5973,"lng":-5.9301},{"lat":43.6532,"lng":-79.3832},{"lat":35.03270691,"lng":111.0133895},{"lat":30.25308298,"lng":120.2155118},{"lat":30.65582188,"lng":104.0815335},{"lat":30.27154839,"lng":120.1595331},{"lat":34.34726882,"lng":108.9464656},{"lat":30.59846674,"lng":114.3115816},{"lat":22.54845664,"lng":114.0645518},{"lat":48.5734,"lng":7.7521},{"lat":34.0522,"lng":-118.2437},{"lat":37.7749,"lng":-122.4194},{"lat":49.2827,"lng":-123.1207},{"lat":59.9311,"lng":30.3609},{"lat":40.4168,"lng":-3.7038},{"lat":30.25308298,"lng":120.2155118},{"lat":36.7783,"lng":-119.4179},{"lat":30.20520785,"lng":115.0455329},{"lat":30.27154839,"lng":120.1595331},{"lat":36.7783,"lng":-119.4179},{"lat":49.8951,"lng":-97.1384},{"lat":25.0720765,"lng":109.2625608},{"lat":30.59846674,"lng":114.3115816},{"lat":45.80882583,"lng":126.5416151},{"lat":29.86603305,"lng":121.6285725},{"lat":53.4084,"lng":-2.9916},{"lat":42.4473,"lng":-71.2272},{"lat":31.23592904,"lng":121.4805389},{"lat":43.6532,"lng":-79.3832},{"lat":50.6521,"lng":9.1624},{"lat":-34.9285,"lng":138.6007},{"lat":36.7783,"lng":-119.4179},{"lat":20.04404944,"lng":110.3255255},{"lat":37.87698903,"lng":112.5563915},{"lat":23.13533631,"lng":113.2714313},{"lat":34.34726882,"lng":108.9464656},{"lat":51.5074,"lng":-0.1278},{"lat":31.04173258,"lng":112.206393}]
    const sphere = ({type: "Sphere"})


    const config = {
        speed: 0.005,
        verticalTilt: -30,
        horizontalTilt: 0
    }

    const antipode = ([longitude, latitude]) => ([longitude + 180, -latitude]);

    const sun = () => {
        const now = new Date();
        const day = new Date(+now).setUTCHours(0, 0, 0, 0);
        const t = solar.century(now);
        const longitude = (day - now) / 864e5 * 360 - 180;
        return [longitude - solar.equationOfTime(t) / 4, solar.declination(t)];
    }

    const day = geoCircle()
        .radius(90)
        .center(sun())

    const night = geoCircle()
        .radius(90)
        .center(antipode(sun()))

    useEffect(() => {
        if(geographies.length===0){
            return;
        }
        const svgElement = select(ref.current);
        const markerGroup = svgElement.append('g');

        const drawGlobe = ()=> {
            svgElement.append("path")
                .datum(sphere)
                .attr("d", geoGenerator)
                .attr('fill', "#000")

            //land
            svgElement.selectAll('g')
                .data(geographies)
                .enter()
                .append("path")
                .attr("d", geoGenerator)
                .attr('fill', "rgb(37, 49, 70)")
                .attr('stroke', "black")
                .attr('strokeWidth', 0.05)

            //daylight
            svgElement
                .append("path")
                .datum(day)
                .attr("fill", "rgba(255, 255, 255, 0.2")
                .attr("d", geoGenerator);
            svgElement
                .append("path")
                .datum(night)
                .attr("fill", "rgba(0, 0, 0, 0.5")
                .attr("d", geoGenerator);
        }

        const drawMarkers = () => {
            //locations
            const markers = markerGroup.selectAll('circle')
                .data(locations);
            markers
                .enter()
                .append('circle')
                .merge(markers)
                .attr("cx", (location) => projection([location.lng, location.lat])[0])
                .attr("cy", (location) => projection([location.lng, location.lat])[1])
                .attr("r", 3)
                .attr('fill', "#E91E63")
                .attr('stroke', "#FFFFFF")
                .attr('strokeWidth', 0.5)
            markerGroup.each(function () {
                this.parentNode.appendChild(this);
            });
        }


        function enableRotation() {
            timer(function (elapsed) {
                projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt]);
                svgElement.selectAll("path").attr("d", geoGenerator);
                drawMarkers();
            });
        }

        drawGlobe();
        drawMarkers();
        if(!isFlat){
            enableRotation();
        }
    }, )

    useEffect(() => {
        fetch("/countries-110m.json")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem: ${response.status}`)
                    return
                }
                response.json().then(data => {
                    setGeographies(feature(data, data.objects.countries).features)
                })
            })
    }, [])



    return (
        <svg ref={ref} viewBox={`0 0 ${width} ${height}`} width={width} height={height} className={classes.root}>
        </svg>
    )
}

export default WorldMap;