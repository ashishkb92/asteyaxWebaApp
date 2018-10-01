import React from 'react';
import { Redirect } from 'react-router'

const registerButton = (props) => (
    <button
        type='submit'
        onClick={props.handleSubmit}>Register
    </button>
)

export default registerButton;