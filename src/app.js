import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            userMobile: ''
        }
    }

    handleForm = (e) => {
        console.log(e)
    }

    render() {
        return (
            <div>
                <AppRouter handleForm = {this.handleForm} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
