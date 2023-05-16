export interface TodoType {
  todoId?: number;
  content? : string;
  status?: boolean; 
  importance?: boolean;
  createdAt?: string;
  label?: {
    labelId: number;
    labelTitle: string;
    labelColor: string;
  }
}