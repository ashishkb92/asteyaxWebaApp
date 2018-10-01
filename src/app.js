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

    handleForm = ({userName, userMobile}) => {
        this.setState({userName, userMobile})
    }

    render() {
        const {userName, userMobile} = this.state;
        return (
            <div>
                <AppRouter handleForm = {this.handleForm} userName={userName} userMobile={userMobile} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
