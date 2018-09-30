import React from 'react';
import { Redirect } from 'react-router'

class registerButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect : false
        }
    }

    handleRegister = () => {
        return (
            this.setState({redirect:true})
        )
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect push to='/dashboard' />
            )
        }
        return (
            <button
                type='submit'
                onClick={this.handleRegister}>Register
            </button>
        )
    }
}


export default registerButton;