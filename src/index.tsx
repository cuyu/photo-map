import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'leaflet/dist/leaflet.css'  // Must import the leaflet css to make map tiles works!
import App from './App';
import ImageThumb from './ImageThumb';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
        <div>
            <App/>
            <ImageThumb/>
        </div>
    ),
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
