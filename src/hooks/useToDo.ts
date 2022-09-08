import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { IToDo } from "@store/slices/types/ToDo";
import { IAddToDoDetailParams, ICompleteToDoDetailParams } from "@hooks/types";
import {
  addDetailToDoAction,
  addToDoListAction,
  completedDetailToDoAction,
} from "@store/slices/toDoSlice";
import { STATUS_TODO } from "../../store/slices/enums/STATUS_TODO";

const useToDo = () => {
  const dispatch = useDispatch();

  const getAllToDos = useSelector((state: RootState) => state.toDoState.toDos);
  const getOneToDo = (id: number) => {
    return getAllToDos.filter((item) => item.id === id)[0];
  };

  const addToDoList = (data: IToDo) => {
    dispatch(
      addToDoListAction({
        ...data,
        id: new Date().getTime(),
        list: [],
      })
    );
  };

  const addDetailToDo = ({ id: toDoId, data }: IAddToDoDetailParams) => {
    const nextToDoState: IToDo[] = _.cloneDeep(getAllToDos);

    nextToDoState.forEach((item, idx: number) => {
      item.id === toDoId &&
        nextToDoState[idx].list.unshift({
          id: new Date().getTime(),
          isCompleted: STATUS_TODO.INCOMPLETE,
          ...data,
        });
    });
    dispatch(addDetailToDoAction({ nextToDoState }));
  };

  const completeDetail = ({
    id: toDoId,
    detailToDoId,
  }: ICompleteToDoDetailParams) => {
    const origin: IToDo[] = _.cloneDeep(getAllToDos);

    let completeToDo: IToDo = origin.filter((item) => item.id === toDoId)[0];
    let anotherToDos: IToDo[] = origin.filter((item) => item.id !== toDoId);

    completeToDo.list.forEach((item, idx) => {
      if (item.id === detailToDoId) {
        completeToDo.list[idx].isCompleted = STATUS_TODO.COMPLETE;
      }
    });

    dispatch(
      completedDetailToDoAction({
        nextToDoState: anotherToDos.concat(completeToDo),
      })
    );
  };

  return {
    getAllToDos,
    getOneToDo,
    addToDoList,
    addDetailToDo,
    completeDetail,
  };
};

export default useToDo;
