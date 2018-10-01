import React from 'react';
import {
    FormGroup,
    FormControl,
    ControlLabel
} from 'react-bootstrap';
import {
    withRouter
  } from 'react-router-dom'

import RegisterButton from './RegisterButton'
import '../styles/components/Register.css'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userMobile: ''
        }
    }

    // getDerivedStateFromProps(props){
    //     const {userName, userMobile} = props;
    //     debugger;
    //     if(userName && userMobile) return ({ userName, userMobile })
    //     return null;
    // }

    componentWillMount(){
        const {userName, userMobile} = this.props;

        if(userName && userMobile) this.setState({ userName, userMobile })
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
                        value={this.state.userName}
                        onChange={this.handleChange}
                        disabled={this.props.match.path ==="/dashboard"}
                    />
                </FormGroup>
                <FormGroup controlId='userMobile' bsSize='large'>
                    <ControlLabel>Mobile Number</ControlLabel>
                    <FormControl
                        type='number'
                        min='0'
                        value={this.state.userMobile}
                        onChange={this.handleChange}
                        disabled={this.props.match.path ==="/dashboard"}
                    />
                </FormGroup>
            </form>
        )

    }

    handleSubmit = () =>{
        const {userName, userMobile} = this.state
        this.props.handleForm({userName, userMobile})
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div className='Register'>
                {this.renderForm()}
                {this.props.match.path ==="/dashboard" || <RegisterButton handleSubmit={this.handleSubmit}/>}
            </div>
        )
    }
}

export default withRouter(RegisterForm);