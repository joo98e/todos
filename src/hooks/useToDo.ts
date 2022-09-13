import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { IToDo } from "@store/slices/types/ToDo";
import { IAddToDoDetailParams, ICompleteToDoDetailParams } from "@hooks/types";
import { addDetailToDoAction, addToDoListAction, completedDetailToDoAction } from "@store/slices/toDoSlice";
import FILTER_BY_TODO_STATUS from "@store/slices/enums/FILTER_BY_TODO_STATUS";

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
          isCompleted: false,
          ...data,
        });
    });
    dispatch(addDetailToDoAction({ nextToDoState }));
  };

  const completeDetailToDo = ({ id: toDoId, detailToDoId }: ICompleteToDoDetailParams) => {
    const origin: IToDo[] = _.cloneDeep(getAllToDos);

    origin.forEach((ToDo: IToDo, i) => {
      if (ToDo.id === toDoId) {
        origin[i].list.forEach((item, j) => {
          if (item.id === detailToDoId) {
            origin[i].list[j].isCompleted = true;
          }
        });
      }
    });

    // let completeToDo: IToDo = origin.filter((item) => item.id === toDoId)[0];
    // let anotherToDos: IToDo[] = origin.filter((item) => item.id !== toDoId);
    // completeToDo.list.forEach((item, idx) => {
    //   if (item.id === detailToDoId) {
    //     completeToDo.list[idx].isCompleted = STATUS_TODO.COMPLETE;
    //   }
    // });

    dispatch(
      completedDetailToDoAction({
        nextToDoState: origin,
      })
    );
  };

  return {
    getAllToDos,
    getOneToDo,
    addToDoList,
    addDetailToDo,
    completeDetail: completeDetailToDo,
  };
};

export default useToDo;
