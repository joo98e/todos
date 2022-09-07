import { IToDo, IToDoDetail } from "@common/types/ToDo";

export interface ICompleteToDoProps {
  toDo: IToDo;
  detailToDoId: number;
}

export interface IRowProps {
  detail: IToDoDetail;
}

export interface IAddToDoProps {
  toDo: IToDo;
}
