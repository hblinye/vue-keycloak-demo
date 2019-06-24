import axios from 'axios';

export class RestApi {

    constructor (target) {
        this.url = target
    }
    
    list() {
        const options = {
            headers: {
                'AUTHORIZATION': 'Bearer ' + localStorage.getItem('vue-refresh-token')
            }
        }
        return axios.get(
            this.url,
            options
        );
    }

}