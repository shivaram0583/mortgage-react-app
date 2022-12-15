import React, { Component } from 'react'
import MortgageService from '../services/MortgageService';
import Swal from "sweetalert2";
import '../Styles/style.css';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            reg_seq: '',
            accountName: '',
            type: '',
            providerName: '',
            amount: '',
            currency: '',
            status: '',
            balanceDate: '',
            createdDate: '',
            lastUpdate: '',
            details :{
            linkedProperty: '',
            monthlyRepayment: '',
            term: '',
            apr: '',
            interestType: '',
            fixedDate: ''
            }
        }

        this.ChangeRegSeqHandler = this.ChangeRegSeqHandler.bind(this);
        this.ChangeAccountNameHandler = this.ChangeAccountNameHandler.bind(this);
        this.ChangeTypeHandler = this.ChangeTypeHandler.bind(this);
        this.ChangeProviderNameHandler = this.ChangeProviderNameHandler.bind(this);
        this.ChangeAmountHandler = this.ChangeAmountHandler.bind(this);
        this.ChangeCurrencyHandler = this.ChangeCurrencyHandler.bind(this);
        this.ChangeStatusHandler = this.ChangeStatusHandler.bind(this);
        this.ChangeBalanceDateHandler = this.ChangeBalanceDateHandler.bind(this);
        this.ChangeCreatedDateHandler = this.ChangeCreatedDateHandler.bind(this);
        this.ChangeLastUpdateHandler = this.ChangeLastUpdateHandler.bind(this);
        this.ChangeLinkedPropertyHandler = this.ChangeLinkedPropertyHandler.bind(this);
        this.ChangeMonthlyRepaymentHandler = this.ChangeMonthlyRepaymentHandler.bind(this);
        this.ChangeTermHandler = this.ChangeTermHandler.bind(this);
        this.ChangeAPRHandler = this.ChangeAPRHandler.bind(this);
        this.ChangeInterestTypeHandler = this.ChangeInterestTypeHandler.bind(this);
        this.ChangeFixedDateHandler = this.ChangeFixedDateHandler.bind(this);
        this.updateMortgage = this.updateMortgage.bind(this);
    }

    componentDidMount(){
        MortgageService.getMortgageById(this.state.id).then( (res) =>{
            let mortgage = res.data;
            this.setState({
                reg_seq: mortgage.reg_seq,
                accountName: mortgage.accountName,
                type: mortgage.term,
                providerName: mortgage.providerName,
                amount: mortgage.amount,
                currency: mortgage.currency,
                status: mortgage.status,
                balanceDate: mortgage.balanceDate,
                createdDate: mortgage.createdDate,
                lastUpdate: mortgage.lastUpdate,
                linkedProperty: mortgage.details ? mortgage.details.linkedProperty : "NA",
                monthlyRepayment: mortgage.details ? mortgage.details.monthlyRepayment : "NA",
                term: mortgage.details ? mortgage.details.term : "NA",
                apr: mortgage.details ? mortgage.details.apr : "NA",
                interestType: mortgage.details ? mortgage.details.interestType : "NA",
                fixedDate: mortgage.details ? mortgage.details.fixedDate : "NA"
            });
        });
    }

    updateMortgage = (e) => {
        e.preventDefault();
        let mortgage = {
            id: this.state.id,
            reg_seq: this.state.reg_seq,
            accountName: this.state.accountName,
            type: this.state.term,
            providerName: this.state.providerName,
            amount: this.state.amount,
            currency: this.state.currency,
            status: this.state.status,
            balanceDate: this.state.balanceDate,
            createdDate: this.state.createdDate,
            lastUpdate: this.state.lastUpdate,
            details: {
            linkedProperty: this.state.linkedProperty,
            monthlyRepayment: this.state.monthlyRepayment,
            term: this.state.term,
            apr: this.state.apr,
            interestType: this.state.interestType,
            fixedDate: this.state.fixedDate
            }
        };
        console.log('mortgage => ' + JSON.stringify(mortgage));
        console.log('id => ' + JSON.stringify(this.state.id));
        MortgageService.updateMortgage(mortgage, this.state.id).then( res => {
            Swal.fire({
                title: "Success!",
                text: "Mortgage with id " +mortgage.id+ " Updated",
                icon: "success",
                button: "Back",
            }).then((result) => {
                this.props.history.push('/mortgage');
            })
        });
    }
    
    ChangeRegSeqHandler = (event) => {
        this.setState({reg_seq: event.target.value});
    }

    ChangeAccountNameHandler = (event) => {
        this.setState({accountName: event.target.value});
    }

    ChangeTypeHandler = (event) => {
        this.setState({type: event.target.value});
    }

    ChangeProviderNameHandler = (event) => {
        this.setState({providerName: event.target.value});
    }

    ChangeAmountHandler = (event) => {
        this.setState({amount: event.target.value});
    }

    ChangeCurrencyHandler = (event) => {
        this.setState({currency: event.target.value});
    }

    ChangeStatusHandler = (event) => {
        this.setState({status: event.target.value});
    }

    ChangeBalanceDateHandler = (event) => {
        this.setState({balanceDate: event.target.value});
    }

    ChangeCreatedDateHandler = (event) => {
        this.setState({createdDate: event.target.value});
    }

    ChangeLastUpdateHandler = (event) => {
        this.setState({lastUpdate: event.target.value});
    }

    ChangeLinkedPropertyHandler = (event) => {
        this.setState({linkedProperty: event.target.value});
    }

    ChangeMonthlyRepaymentHandler = (event) => {
        this.setState({monthlyRepayment: event.target.value});
    }

    ChangeTermHandler = (event) => {
        this.setState({term: event.target.value});
    }

    ChangeAPRHandler = (event) => {
        this.setState({apr: event.target.value});
    }

    ChangeInterestTypeHandler = (event) => {
        this.setState({interestType: event.target.value});
    }

    ChangeFixedDateHandler = (event) => {
        this.setState({fixedDate: event.target.value});
    }

    cancel(){
        this.props.history.push('/mortgage');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div class = "wrapper" id="form">
                        <div>
                            <div>
                                <h3 class="title">Update Mortgage</h3>
                                <div class = "form-body">
                                <form>
                                <div class="inputfield">
                                    <label>ID</label>
                                    <input placeholder="Enter id" name="id" className="form-control" value={this.state.id}/>
                                </div>
                                <div class="inputfield">
                                    <label>Registration Number</label>
                                    <input placeholder="Enter sequence number" name="reg_seq" className="form-control" value={this.state.reg_seq}/>
                                </div>
                                <div class="inputfield">
                                    <label>Account Name</label>
                                    <input placeholder="Enter account name" name="accountName" className="form-control" value={this.state.accountName} onChange={this.ChangeAccountNameHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Type</label>
                                    <input placeholder="Enter type" name="type" className="form-control" value={this.state.type} onChange={this.ChangeTypeHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Provider Name</label>
                                    <input placeholder="Enter provider name" name="providerName" className="form-control" value={this.state.providerName} onChange={this.ChangeProviderNameHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Amount</label>
                                    <input placeholder="Enter amount" name="amount" className="form-control" value={this.state.amount} onChange={this.ChangeAmountHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Currency</label>
                                    <input placeholder="Enter currency" name="currency" className="form-control" value={this.state.currency} onChange={this.ChangeCurrencyHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Status</label>
                                    <input placeholder="Enter current status" name="status" className="form-control" value={this.state.status} onChange={this.ChangeStatusHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Balance Date</label>
                                    <input placeholder="Enter date" name="balanceDate" type="date" className="form-control" value={this.state.balanceDate} onChange={this.ChangeBalanceDateHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Created Date</label>
                                    <input placeholder="Enter date" name="createdDate" className="form-control" value={this.state.createdDate} onChange={this.ChangeCreatedDateHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Last Update</label>
                                    <input placeholder="Enter date" name="lastUpdate" className="form-control" value={this.state.lastUpdate} onChange={this.ChangeLastUpdateHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Linked Property</label>
                                    <input placeholder="Enter linked property" name="linkedProperty" className="form-control" value={this.state.linkedProperty} onChange={this.ChangeLinkedPropertyHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Montly Repayment</label>
                                    <input placeholder="Enter re-payment amount" name="monthlyRepayment" className="form-control" value={this.state.monthlyRepayment} onChange={this.ChangeMonthlyRepaymentHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Term</label>
                                    <input placeholder="Enter terms" name="term" className="form-control" value={this.state.term} onChange={this.ChangeTermHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>APR</label>
                                    <input placeholder="Enter apr percentage" name="apr" className="form-control" value={this.state.apr} onChange={this.ChangeAPRHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Interest Type</label>
                                    <input placeholder="Enter interest type" name="interestType" className="form-control" value={this.state.interestType} onChange={this.ChangeInterestTypeHandler}/>
                                </div>
                                <div class="inputfield">
                                    <label>Fixed Date</label>
                                    <input placeholder="Enter date" name="fixedDate" type="date" className="form-control" value={this.state.fixedDate} onChange={this.ChangeFixedDateHandler}/>
                                </div>
                                <br></br>
                                <div class="inputfield">
                                    <button className="btn btn-success" onClick={this.updateMortgage}>Save Mortgage</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
