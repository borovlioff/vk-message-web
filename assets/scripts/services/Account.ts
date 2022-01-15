import.meta.hot;
import axios from "axios";

export async function creat({username, password}:{username: string, password: string}) {
  return await axios.post(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL}/account/`,{ username, password });
}

export async function get(){
  return await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL}/account/`);
}
export async function remove({id}:{id:number}){
  return axios.delete(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL}/account/${id}`)
}