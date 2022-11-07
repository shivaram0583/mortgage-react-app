import React, { Component } from 'react'
import MortgageService from '../services/MortgageService'
import '../Styles/style.css';


class ViewMortgageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            mortgage: {}
        }
    }

    componentDidMount(){
        MortgageService.getMortgageById(this.state.id).then( res => {
            
            this.setState({mortgage: res.data});
            
        })
    }
    
    cancel(){
        this.props.history.push('/mortgage');
    }

    render() {
        return (
            <div class="wrapper" id="form">
                <div>
                    <h3 class = "title"> Mortgage Details WITH ID {this.state.mortgage.id}</h3>
                    <div class = "form">
                        <div>
                            <label style={{forntSize:"18px"}}><b> Registration Number : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.reg_seq}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Account Name : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.accountName}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Type : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.type}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Provider Name : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.providerName}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Amount : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.amount}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Currency : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.currency}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Status : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.status}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Balance Date : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.balanceDate}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Created Date : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.createdDate}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Last Update : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.lastUpdate}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Linked Property : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.details ? this.state.mortgage.details.linkedProperty : "NA"}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Monthly Repayment : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.details ? this.state.mortgage.details.monthlyRepayment : "NA"}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Term : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.details ? this.state.mortgage.details.term : "NA" }</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> APR : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.details ? this.state.mortgage.details.apr : "NA"}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Interest Type : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.details ? this.state.mortgage.details.interestType : "NA"}</label>
                        </div>
                        <hr></hr>
                        <div>
                            <label style={{forntSize:"18px"}}><b> Fixed Date : </b></label>
                            <label style={{forntSize:"18px", margin:"20px"}}> { this.state.mortgage.details ? this.state.mortgage.details.fixedDate : "NA"}</label>
                        </div>
                        <hr></hr>
                        <div class="inputfield">
                            <button id="btn3" class="btn3" onClick={this.cancel.bind(this)}> Back </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewMortgageComponent
