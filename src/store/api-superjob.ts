import axios from "axios";

const instanse = axios.create({
  baseURL: 'https://startup-summer-2023-proxy.onrender.com',
    withCredentials:true,
    headers: {
      "X-Api-App-Id": "v3.r.137534789.2ee29a5d94ad82b3cae8372509b2a4e95a599f92.069e40e16b14a90eb24d73c439ab98d98e15232c",
        "x-secret-key": "GEU4nvd3rej*jeh.eqp"
    }
})


export const superjobApi ={
    auth(password: string, login: string){
       return  instanse.get(`/2.0/oauth2/password/?login=${login}&password=${password}&client_id=2729&client_secret=v3.r.137534789.2ee29a5d94ad82b3cae8372509b2a4e95a599f92.069e40e16b14a90eb24d73c439ab98d98e15232c&hr=0`)
    }
}



