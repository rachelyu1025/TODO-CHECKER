import { ModifyType, CreateType } from './../utils/todoType';
import api from '../utils/api';

export const getTodos = async(date: string) => {
  return api.get(`/todo/${date}`).catch(err => console.log(err))
}

export const postTodo = async({content, createdAt, labelTitle, labelColor}:CreateType) =>{
  const body = {
    content,
    createdAt,
    labelTitle,
    labelColor
  }
  
  return api.post(`/todo`, body).catch(err => console.log(err))
}

export const putImportance = async({todoId, importance}: {todoId: number; importance: boolean}) =>{
  const body = {
    importance
  }
  
  return api.put(`/todo/${todoId}`, body).catch(err => console.log(err))
}

export const deleteTodo = async({todoId}:{todoId : number | undefined}) =>{
  return api.delete(`/todo/${todoId}`).catch(err => console.log(err))
}

export const putTodo = async({todoId, content}:ModifyType) =>{
  const body = {
    content
  }

  return api.put(`/todo/${todoId}`, body).catch(err => console.log(err))
}