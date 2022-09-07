import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { IToDo, IToDoDetail } from "@common/types/ToDo";
import {
  addToDoDetail,
  addToDoList as addToDoListDispatch,
  completedDetailToDo,
} from "@store/slices/toDoSlice";
import _ from "lodash";

interface IDispatchProps {
  id: number;
}

interface IAddToDoDetailParams extends IDispatchProps {
  data: {
    title: string;
    desc: string;
  };
}

interface ICompleteToDoDetailParams extends IDispatchProps {
  detailToDoId: number;
}

interface IUseToDoParams {}

const useToDo = () => {
  const dispatch = useDispatch();
  const allToDos = useSelector((state: RootState) => state.toDoState.toDos);

  /**
   * @description Redux Store의 투두 리스트 추가
   * @param data
   */
  const addToDoList = (data: IToDo) => {
    dispatch(
      addToDoListDispatch({
        ...data,
        id: new Date().getTime(),
        list: [],
      })
    );
  };

  /**
   * @param id
   * @param data
   */
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
    dispatch(addToDoDetail({ nextToDoState }));
  };

  const completeDetail = ({
    id: toDoId,
    detailToDoId,
  }: ICompleteToDoDetailParams) => {
    const origin: IToDo[] = _.cloneDeep(allToDos);
    let completeToDos: IToDo = origin.filter((item) => item.id === toDoId)[0];
    let anotherToDos: IToDo[] = origin.filter((item) => item.id !== toDoId);

    completeToDos.list.forEach((item, idx) => {
      console.log(item.id, detailToDoId);
      if (item.id === detailToDoId) {
        console.log(completeToDos.list[idx]);
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
    addToDoList,
    addDetail,
    completeDetail,
  };
};

export default useToDo;
