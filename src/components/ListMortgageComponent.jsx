import React, { Component } from 'react'
import MortgageService from '../services/MortgageService'
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

class ListMortgageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                mortgage: []
        }
        this.addMortgage = this.addMortgage.bind(this);
        this.editMortgage = this.editMortgage.bind(this);
        this.deleteMortgage = this.deleteMortgage.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    deleteMortgage(id){
        MortgageService.deleteMortgage(id).then( res => {
            this.setState({mortgage: this.state.mortgage.filter(mortgage => mortgage.id !== id)});
        });
    }

    viewMortgage(id){
        this.props.history.push(`/view-mortgage/${id}`);
    }

    editMortgage(id){
        this.props.history.push(`/add-mortgage/${id}`);
    }

    componentDidMount(){
        MortgageService.getMortgage().then((res) => {
            this.setState({ mortgage: res.data});
        });
    }

    addMortgage(){
        this.props.history.push('/add-mortgage/_add');
    }
    
    handleSearch(id)
    {
        this.props.history.push(`/search-mortgage/${id}`);
    }

    render() {
        return (
            <div>
                <br></br>
                 <h2 className="text-center">Mortgage Records</h2>
                 <br></br>
                 <div className = "row">
                    <form className="form-inline">
                    <button className="btn btn-primary mb-2" onClick={this.addMortgage}> Create Mortgage</button>
                    <br></br>
                    <div className="form-group mx-sm-3 mb-2">
                        <input class="form-control" id="inputPassword2" placeholder="Search here..." value={this.state.id}/>
                        </div>
                        <button className="btn btn-primary mb-2" onClick={this.handleSearch}>Search Mortgage</button>
                    </form>
                 </div>
                 <div className = "row" style={{overflow: "scroll", height: "510px"}}>
                        <table className = "table table-striped table-bordered">

                            <thead className="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Sequence</th>
                                    <th>Account Name</th>
                                    <th>Type</th>
                                    <th>Provider Name</th>
                                    <th>Amount</th>
                                    <th>Currency</th>
                                    <th>Status</th>
                                    <th>Balance Date</th>
                                    <th>Created Date</th>
                                    <th>Last Update</th>
                                    <th>Linked Property</th>
                                    <th>Monthly Repayment</th>
                                    <th>Term</th>
                                    <th>APR</th>
                                    <th>Interest Type</th>
                                    <th>Fixed Date</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.mortgage.map(
                                        mortgage => 
                                        <tr key = {mortgage.id}>
                                             <td>{mortgage.id}</td>
                                             <td>{mortgage.reg_seq}</td>
                                             <td>{mortgage.accountName}</td>
                                             <td>{mortgage.type}</td>
                                             <td>{mortgage.providerName}</td>
                                             <td>{mortgage.amount}</td>
                                             <td>{mortgage.currency}</td>
                                             <td>{mortgage.status}</td>
                                             <td>{mortgage.balanceDate}</td>
                                             <td>{mortgage.createdDate}</td>
                                             <td>{mortgage.lastUpdate}</td>
                                             <td>{mortgage.details ? mortgage.details.linkedProperty : "NA"}</td>
                                             <td>{mortgage.details ? mortgage.details.monthlyRepayment : "NA"}</td>
                                             <td>{mortgage.details ? mortgage.details.term : "NA"}</td>
                                             <td>{mortgage.details ? mortgage.details.apr : "NA"}</td>
                                             <td>{mortgage.details ? mortgage.details.interestType : "NA"}</td>
                                             <td>{mortgage.details ? mortgage.details.fixedDate : "NA"}</td>
                                             <td>
                                                 <button type = "button" onClick={ () => this.editMortgage(mortgage.id)} style={{margin:"3px", width:"65px"}} className="btn btn-info btn-sm"> Update </button>
                                                 <button type="button" id="delete" style={{margin:"3px", width:"65px"}} onClick = { () => {
                                                    Swal.fire({
                                                        title : 'Are You Sure?',
                                                        text : 'You want to delete Mortgage with id ' + mortgage.id,
                                                        icon : 'warning',
                                                        showCancelButton : true,
                                                        confirmButtonText : 'Yes, delete it',
                                                        cancelButtontext : 'No, Keep it'
                                                        }).then((result) => {
                                                            if(result.value){
                                                                this.deleteMortgage(mortgage.id)
                                                                Swal.fire(
                                                                    'Deleted!',
                                                                    'Mortgage with id ' +mortgage.id+ ' has deleted',
                                                                    'success'
                                                                    )}
                                                                     else if(result.dismiss === Swal.DismissReason.cancel){}
                                                                     })
                                                        }} className = "btn btn-danger btn-sm"> Delete </button>
                                                 <button type="button" style={{margin:"3px", width:"65px"}} onClick = { () => this.viewMortgage(mortgage.id)} className="btn btn-info btn-sm"> View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListMortgageComponent
