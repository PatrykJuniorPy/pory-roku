import React from 'react';
import reactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";

class App extends React.Component {
        state = { latitude: null, errorMessage: ""};
        
    

    render() {
        if (this.state.latitude && !this.state.errorMessage) {
            return <SeasonDisplay latitude={this.state.latitude} />
        }
        if (!this.state.latitude && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        return <Spinner>Ładowanie</Spinner>
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ latitude: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        )
    }
}
    
reactDom.render(<App />, document.querySelector("#root"));