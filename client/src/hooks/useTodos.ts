import { getTodos } from './../api/todos';
import {useQuery} from 'react-query';

export const useGetTodos = () => {
  return useQuery(['get/todos'],getTodos);
}