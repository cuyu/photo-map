import * as React from 'react';
import {Map, TileLayer, Marker} from 'react-leaflet'
import {DivIcon, LatLngTuple} from "leaflet";
// import ImageThumb from "./ImageThumb";

class App extends React.Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
        image: [],
        width: 0,
        height: 0,
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

    public render() {
        const position: LatLngTuple = [this.state.lat, this.state.lng];
        const image = btoa(String.fromCharCode.apply(null, this.state.image));
        return (
            <Map center={position} zoom={this.state.zoom} className='Map'>
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
