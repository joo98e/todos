export interface IToDoList {
  todo: IToDo[];
}

export interface IToDoListInitialState {
  todo: IToDo[];
}

export interface IToDo {
  id: number;
  nickname: string;
  subject: string;
  desc: string;
  list: IToDoDetail[];
}

export interface IToDoDetail {
  id?: number;
  title: string;
  desc: string;
  isCompleted: boolean;
}
