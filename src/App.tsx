import * as React from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import {LatLngTuple} from "leaflet";

class App extends React.Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    };

    public render() {
        const position: LatLngTuple = [this.state.lat, this.state.lng];
        return (
            <Map center={position} zoom={this.state.zoom} className='Map'>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        );
    }
}

export default App;
