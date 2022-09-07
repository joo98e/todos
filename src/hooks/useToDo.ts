import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { IToDo, IToDoDetail } from "@common/types/ToDo";
import { IAddToDoDetailParams, ICompleteToDoDetailParams } from "@hooks/types";
import {
  addToDoDetailAction,
  addToDoListAction,
  completedDetailToDo,
} from "@store/slices/toDoSlice";

const useToDo = () => {
  const dispatch = useDispatch();
  
  const getAllToDos =useSelector((state: RootState) => state.toDoState.toDos) 

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
          isCompleted: false,
          ...data,
        });
    });
    dispatch(addToDoDetailAction({ nextToDoState }));
  };

  const completeDetail = ({
    id: toDoId,
    detailToDoId,
  }: ICompleteToDoDetailParams) => {
    const origin: IToDo[] = _.cloneDeep(getAllToDos);
    let completeToDos: IToDo = origin.filter((item) => item.id === toDoId)[0];
    let anotherToDos: IToDo[] = origin.filter((item) => item.id !== toDoId);

    completeToDos.list.forEach((item, idx) => {
      if (item.id === detailToDoId) {
        completeToDos.list[idx].isCompleted = true;
      }
    });

    dispatch(
      completedDetailToDo({
        nextToDoState: anotherToDos.concat(completeToDos),
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
