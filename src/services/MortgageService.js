import axios from 'axios';

const MORTGAGE_API_BASE_URL = "http://localhost:8080/mortgage/v1.0/loanService/";

const USER_SIGNIN_SIGNUP_API = "http://localhost:8080/auth/"

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

    postSignIn(email, password){
        return axios.post(USER_SIGNIN_SIGNUP_API + 'signin/'+email+'/'+password);
    }

    postSignUp(user){
        return axios.post(USER_SIGNIN_SIGNUP_API + 'signup/', user);
    }
        
}

export default new MortgageService()