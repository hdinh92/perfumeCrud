import axios from 'axios'
const Config = 'https://5dcc478d85d1960014615e3f.mockapi.io/api'
export default function callAPI (endpoint,method='GET',body){
    return  axios({
        method : method,
        url : `${Config}/${endpoint}`,
        data : body
    }).catch(err=>{
        console.log(err);
    })
}