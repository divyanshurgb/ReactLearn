import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons8-instagram.svg'
import './Login.css';
import {Link} from 'react-router-dom';

    
class Login extends React.Component {
    
    state = {
        email: '',
        pwd: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className = 'div-login'> 
                <div className = 'div-login-logo'>
                    <Logo />
                </div>
                <div>
                    <form onSubmit>  {this.handleSubmit}
                        <input type = 'email' name = 'email' placeholder = 'email....' required onChange={this.handleChange}/>
                        <input type = 'password' name = 'pwd' placeholder = 'password....' required onChange = {this.handleChange}/>
                        <button onSubmit = {this.handleSubmit}> Log In </button>
                    </form>
                    <Link to="/multipleInputs" variant = "body2">
                        Not have an account ? Sign up here 
                    </Link>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}


export default Login;