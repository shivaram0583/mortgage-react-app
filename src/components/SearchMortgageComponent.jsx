import React, { Component } from 'react';
import MortgageService from '../services/MortgageService';
import '../Styles/style.css';
import { Link } from 'react-router-dom';

class SearchMortgageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchId: '',
            mortgage: null,
            error: null,
            isLoading: false
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.searchMortgage = this.searchMortgage.bind(this);
    }

    handleSearchChange = (event) => {
        this.setState({ searchId: event.target.value });
    }

    searchMortgage = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true, error: null, mortgage: null });

        MortgageService.getMortgageById(this.state.searchId)
            .then(response => {
                this.setState({
                    mortgage: response.data,
                    isLoading: false
                });
            })
            .catch(error => {
                this.setState({
                    error: "Mortgage not found with ID: " + this.state.searchId,
                    isLoading: false
                });
            });
    }

    render() {
        const { mortgage, error, isLoading } = this.state;

        return (
            <div className="wrapper">
                <h2 className="title">Search Mortgage by ID</h2>
                <div className="form">
                    <div className="inputfield">
                        <label>Mortgage ID</label>
                        <input 
                            type="text" 
                            placeholder="Enter mortgage ID" 
                            value={this.state.searchId}
                            onChange={this.handleSearchChange}
                            className="input"
                        />
                    </div>
                    <div className="inputfield">
                        <button onClick={this.searchMortgage} className="btn1" disabled={isLoading}>
                            {isLoading ? 'Searching...' : 'Search'}
                        </button>
                        <Link to="/mortgage">
                            <button className="btn2">Back</button>
                        </Link>
                    </div>

                    {error && (
                        <div style={{ color: 'red', marginTop: '20px', textAlign: 'center' }}>
                            {error}
                        </div>
                    )}

                    {mortgage && (
                        <div className="mortgage-details">
                            <h3>Mortgage Details</h3>
                            <div className="inputfield">
                                <label>ID:</label>
                                <span>{mortgage.id}</span>
                            </div>
                            <div className="inputfield">
                                <label>Registration Number:</label>
                                <span>{mortgage.reg_seq}</span>
                            </div>
                            <div className="inputfield">
                                <label>Account Name:</label>
                                <span>{mortgage.accountName}</span>
                            </div>
                            <div className="inputfield">
                                <label>Type:</label>
                                <span>{mortgage.type}</span>
                            </div>
                            <div className="inputfield">
                                <label>Provider Name:</label>
                                <span>{mortgage.providerName}</span>
                            </div>
                            <div className="inputfield">
                                <label>Amount:</label>
                                <span>{mortgage.amount}</span>
                            </div>
                            <div className="inputfield">
                                <label>Currency:</label>
                                <span>{mortgage.currency}</span>
                            </div>
                            <div className="inputfield">
                                <label>Status:</label>
                                <span>{mortgage.status}</span>
                            </div>
                            <div className="inputfield">
                                <label>Balance Date:</label>
                                <span>{mortgage.balanceDate}</span>
                            </div>
                            {mortgage.details && (
                                <>
                                    <div className="inputfield">
                                        <label>Linked Property:</label>
                                        <span>{mortgage.details.linkedProperty}</span>
                                    </div>
                                    <div className="inputfield">
                                        <label>Monthly Repayment:</label>
                                        <span>{mortgage.details.monthlyRepayment}</span>
                                    </div>
                                    <div className="inputfield">
                                        <label>Term:</label>
                                        <span>{mortgage.details.term}</span>
                                    </div>
                                    <div className="inputfield">
                                        <label>APR:</label>
                                        <span>{mortgage.details.apr}</span>
                                    </div>
                                    <div className="inputfield">
                                        <label>Interest Type:</label>
                                        <span>{mortgage.details.interestType}</span>
                                    </div>
                                    <div className="inputfield">
                                        <label>Fixed Date:</label>
                                        <span>{mortgage.details.fixedDate}</span>
                                    </div>
                                </>
                            )}
                            <div className="inputfield">
                                <Link to={`/view-mortgage/${mortgage.id}`}>
                                    <button className="btn3">View Full Details</button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default SearchMortgageComponent;