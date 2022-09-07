import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { IToDo, IToDoDetail } from "@common/types/ToDo";
import {
  addToDoDetailAction,
  addToDoListAction,
  completedDetailToDo,
} from "@store/slices/toDoSlice";
import _ from "lodash";

interface IToDoDetailDispatchProps {
  id: number;
}

interface IAddToDoDetailParams extends IToDoDetailDispatchProps {
  data: {
    title: string;
    desc: string;
  };
}

interface ICompleteToDoDetailParams extends IToDoDetailDispatchProps {
  detailToDoId: number;
}

interface IUseToDoParams {}

const useToDo = () => {
  const dispatch = useDispatch();
  const allToDos = useSelector((state: RootState) => state.toDoState.toDos);

  const getOneToDo = (id: number) => {
    return allToDos.filter((item) => item.id === id)[0];
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

  const addDetail = ({ id: toDoId, data }: IAddToDoDetailParams) => {
    const nextToDoState: IToDo[] = _.cloneDeep(allToDos);

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
    const origin: IToDo[] = _.cloneDeep(allToDos);
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
    allToDos,
    getOneToDo,
    addToDoList,
    addDetail,
    completeDetail,
  };
};

export default useToDo;
