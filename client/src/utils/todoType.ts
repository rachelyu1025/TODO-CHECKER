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

export interface StarType {
  todoId : number;
  importance: boolean;
}

export interface PenIconType {
  todoId: number | undefined;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CreateType {
  content: string;
  createdAt: string; 
  labelTitle: string; 
  labelColor: string;
  setLabel?:React.Dispatch<React.SetStateAction<string>>
  setContent?:  React.Dispatch<React.SetStateAction<string>>
}

export interface ModifyType {
  todoId: number | undefined;
  content: string;
  handleModify?: React.Dispatch<React.SetStateAction<boolean>>
}

