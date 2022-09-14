import { IToDo, IToDoDetail } from "@store/slices/types/ToDo";

export interface ICompleteToDoProps {
  detailToDoId: number;
}

export interface IRowProps {
  detail: IToDoDetail;
}

export interface IAddToDoProps {
  toDo: IToDo;
}
