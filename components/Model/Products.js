import axios from 'axios';
export default class Products {
    static app_url = 'https://api-dev.twenty-one-ai.com/'
    constructor() {
    }
    static getProducts = async () => {
        return axios.get(this.app_url + 'api/products/getproduct')
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return (error.response.data);
            });
    }
    static getProductById = async (id) => {
        console.log("recived id is : ", id);
        return axios.get(this.app_url + 'api/products/getproduct/' + id)
            .then((response) => {
                // console.log("test sucess " , response.data);
                return response.data
            })
            .catch((error) => {
                // console.log("test error " , error.response.data);
                return (error.response.data);
            });
    }
}