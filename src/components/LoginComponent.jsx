import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import MortgageService from '../services/MortgageService';
import '../Styles/style.css';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            dob: '',
            isRegistered: true, // Toggle between sign in and sign up
            loading: false,
            error: null
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    toggleForm = () => {
        this.setState({ isRegistered: !this.state.isRegistered, error: null });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password, firstName, lastName, dob, isRegistered } = this.state;
        this.setState({ loading: true, error: null });

        if (isRegistered) {
            // Sign in logic
            MortgageService.postSignIn(email, password)
                .then(response => {
                    if (response.data === "Sign-in successful") {
                        console.log('Sign-in successful');
                        this.props.history.push('/mortgage');
                    } else {
                        this.setState({ error: 'Sign In failed' });
                    }
                })
                .catch(error => {
                    this.setState({ error: 'Sign In error' });
                })
                .finally(() => {
                    this.setState({ loading: false });
                });
        } else {
            // Sign up logic
            const userData = { firstName, lastName, dob, email, password };
            MortgageService.postSignUp(userData)
                .then(response => {
                    if (response.data === "User registered successfully") {
                        console.log('User registered successfully');
                        this.props.history.push('/mortgage');
                    } else {
                        this.setState({ error: 'Sign Up failed' });
                    }
                })
                .catch(error => {
                    this.setState({ error: 'Sign Up error' });
                })
                .finally(() => {
                    this.setState({ loading: false });
                });
        }
    }

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const mode = params.get('mode');
        if (mode === 'signup') {
            this.setState({ isRegistered: false });
        }
    }

    render() {
        const { isRegistered, email, password, firstName, lastName, dob, loading, error } = this.state;
        return (
            <div className="wrapper">
                <h2 className="title">{isRegistered ? 'Sign In' : 'Sign Up'}</h2>
                <form onSubmit={this.handleSubmit} className="form">
                    {!isRegistered && (
                        <>
                            <div className="inputfield">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    onChange={this.handleInputChange}
                                    className="input"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>
                            <div className="inputfield">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    onChange={this.handleInputChange}
                                    className="input"
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>
                            <div className="inputfield">
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={dob}
                                    onChange={this.handleInputChange}
                                    className="input"
                                    required
                                />
                            </div>
                        </>
                    )}
                    <div className="inputfield">
                        <label>Email/Username</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleInputChange}
                            className="input"
                            placeholder="Enter your email or username"
                            required
                        />
                    </div>
                    <div className="inputfield">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}
                            className="input"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="inputfield">
                        <button type="submit" className="btn1" disabled={loading}>
                            {loading ? 'Please wait...' : isRegistered ? 'Sign In' : 'Sign Up'}
                        </button>
                    </div>
                    <div className="inputfield">
                        <button type="button" onClick={this.toggleForm} className="btn2">
                            {isRegistered ? 'Need an account? Sign Up' : 'Have an account? Sign In'}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginComponent);