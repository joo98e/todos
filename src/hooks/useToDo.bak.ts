import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { IToDo, IToDoDetail } from "@common/types/ToDo";
import { addToDoList as addToDoListDispatch } from "@store/slices/toDoSlice";
import _ from "lodash";

interface IAddToDoDetailParams {
  id: number;
  data: {
    title: string;
    desc: string;
  };
}

const useToDo = {
  /**
   * @description Redux Store의 모든 투두 리스트 조회
   * @return IToDo[]
   */
  getAllToDo: function (): IToDo[] {
    return useSelector((state: RootState) => state.toDoState.toDos);
  },

  /**
   * @description Redux Store의 투두 리스트 추가
   * @param data
   */
  addToDoList: function (data: IToDo): void {
    const dispatch = useDispatch();
    dispatch(
      addToDoListDispatch({
        ...data,
        id: new Date().getTime(),
        list: [],
      })
    );
  },

  /**
   * @param id
   * @param data
   */
  addToDoDetail: function addToDoDetail({
    id: toDoId,
    data,
  }: IAddToDoDetailParams) {
    const dispatch = useDispatch();

    const nextState: IToDo[] = _.cloneDeep(useToDo.getAllToDo());

    nextState.forEach((item, idx: number) => {
      item.id === toDoId &&
        nextState[idx].list.unshift({
          id: new Date().getTime(),
          isCompleted: false,
          ...data,
        });
    });
  },
};

export const getAllToDo = useToDo.getAllToDo;
export const addToDoList = useToDo.addToDoList;
export const addToDoDetail = useToDo.addToDoDetail;

export default useToDo;
