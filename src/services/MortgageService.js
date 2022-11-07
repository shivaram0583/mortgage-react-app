import axios from 'axios';

const MORTGAGE_API_BASE_URL = "http://localhost:8080/mortgage/v1.0/loanService/";

class MortgageService {

    getMortgage(){

        return axios.get(MORTGAGE_API_BASE_URL + 'getMortgage');
    }

    createMortgage(mortgage){

        return axios.post(MORTGAGE_API_BASE_URL + 'postMortgage', mortgage);
    }

    getMortgageById(mortgageId){

        return axios.get(MORTGAGE_API_BASE_URL + 'getMortgage/' + mortgageId);
    }

    updateMortgage(mortgage, mortgageId){

        return axios.put(MORTGAGE_API_BASE_URL + 'updateMortgage/' + mortgageId, mortgage);
    }

    deleteMortgage(mortgageId){
        
        return axios.delete(MORTGAGE_API_BASE_URL + 'deleteMortgage/' + mortgageId);
    }
}

export default new MortgageService()