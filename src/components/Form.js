import React from 'react';
import {
    FormGroup,
    FormControl,
    ControlLabel
} from 'react-bootstrap';
import '../styles/components/Register.css'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userMobile: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    validateForm = () => { 
        return (
            this.state.userName.length > 0 &&
            this.state.userMobile > 0 
        )
    }

    renderForm() {
        return (
            <form>
                <FormGroup controlId='userName' bsSize='large'>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        autoFocus
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId='userMobile' bsSize='large'>
                    <ControlLabel>Mobile Number</ControlLabel>
                    <FormControl
                        type='number'
                        min='0'
                        value={this.state.mobile}
                        onChange={this.handleChange}
                    />
                </FormGroup>
            </form>
        )

    }

    render() {
        return (
            <div className='Register'>
                {this.renderForm()}
            </div>
        )
    }
}

export default RegisterForm;