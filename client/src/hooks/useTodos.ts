import { deleteTodo, getTodos, postTodo, putImportance, putTodo } from './../api/todos';
import { useQuery, useMutation, useQueryClient } from 'react-query';


export const useGetTodos = (date:string) => {
  return useQuery(['get/todos'],() => getTodos(date),{
    enabled: !!date //date가 존재할 경우에만 쿼리 실행
  }
  );
}

export const usePostTodo = () => {
  const queryClient = useQueryClient()

  return useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get/todos'] })
    },
  }
  );
}

export const usePutImportance = () => {
  const queryClient = useQueryClient()

  return useMutation(putImportance, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get/todos'] })
    }
  });
}

export const useDeleteTodo = () => {
  const queryClient = useQueryClient()

  return useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get/todos'] })
    }
  });
}

export const usePutTodo = () => {
  const queryClient = useQueryClient()

  return useMutation(putTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get/todos'] })
    }
  });
}