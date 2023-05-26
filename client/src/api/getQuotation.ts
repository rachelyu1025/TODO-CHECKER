import api from '../utils/api';

export default function GetQuotation() {
  
  return api.get(`/quote`).catch(err => console.log(err));

}