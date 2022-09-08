import { STATUS_TODO } from "../enums/STATUS_TODO";

export interface IToDoListInitialState {
  toDos: IToDo[];
}

export interface IToDo {
  id: number;
  nickname: string;
  subject: string;
  desc: string;
  list: IToDoDetail[];
}

export interface IToDoDetail {
  id: number;
  title: string;
  desc: string;
  isCompleted: STATUS_TODO;
}
