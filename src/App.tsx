import * as React from 'react';
import {Map, TileLayer, Marker} from 'react-leaflet'
import {DivIcon, LatLngTuple} from "leaflet";


class App extends React.Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
        image: [],
        width: 0,
        height: 0,
        center: {
            lat: 51.505,
            lng: -0.09,
        },
    };

    mapRef = React.createRef();

    handleLocationFound = (e: any) => {
        this.setState({
            hasLocation: true,
            center: e.latlng,
        })
    };

    componentWillMount() {
        const that = this;
        fetch('/image').then((response) => {
            return response.json();
        }).then((value) => {
            that.setState({
                image: value.buffer.data,
                height: value.height,
                width: value.width,
                lat: value.tags.GPSLatitude,
                lng: value.tags.GPSLongitude,
            });
        }).catch((err) => {
            console.warn(err);
        });
    }

    componentDidMount() {
        // Locate current place and make it center in the map
        if (this.mapRef.current) {
            const ref = this.mapRef.current as any;
            ref.leafletElement.locate();
        }
    }

    public render() {
        const position: LatLngTuple = [this.state.lat, this.state.lng];
        const image = btoa(String.fromCharCode.apply(null, this.state.image));
        return (
            <Map center={this.state.center} zoom={this.state.zoom} className='Map'
                 onLocationfound={this.handleLocationFound}
                 ref={this.mapRef as any}
            >
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={new DivIcon({
                    html: `<img src='data:image/jpeg;base64,${image}' />`,
                })}>
                </Marker>
            </Map>
        );
    }
}

export default App;
