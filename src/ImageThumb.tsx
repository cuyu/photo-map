import * as React from 'react';


class ImageThumb extends React.Component {
    state = {
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
            });
        }).catch((err) => {
            console.warn(err);
        });
    }

    public render() {
        const image = btoa(String.fromCharCode.apply(null, this.state.image));
        return (
            <img src={`data:image/jpeg;base64,${image}`} />
        );
    }
}

export default ImageThumb;
