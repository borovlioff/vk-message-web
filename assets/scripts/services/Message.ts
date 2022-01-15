import.meta.hot;
import axios from "axios"

export async function One({username, message, recipientId}:{
  username: string;
  message: string;
  recipientId: number;
}) {
  return axios.post(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL}/message`, {username, message, recipientId});
}

export async function Mailing({username, message, recipientId}:{
  username: string[];
  message: string;
  recipientId: number[];
}) {
  return axios.post(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL}/message/mailing`, {username, message, recipientId});
}
export async function Ddos({username, message, recipientId,count}:{
  username: string[];
  message: string;
  recipientId: number;
  count: number;
}) {
  return axios.post(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL}/message/ddos`, {username, message, recipientId, count});
}
