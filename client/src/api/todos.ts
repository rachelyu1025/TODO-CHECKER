import api from '../utils/api';

export const getTodos = async() => {
  return api.get('/todo/20230425').catch(err => console.log(err))
}
