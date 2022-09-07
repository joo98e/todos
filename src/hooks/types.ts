export interface IToDoDetailDispatchProps {
  id: number;
}

export interface IAddToDoDetailParams extends IToDoDetailDispatchProps {
  data: {
    title: string;
    desc: string;
  };
}

export interface ICompleteToDoDetailParams extends IToDoDetailDispatchProps {
  detailToDoId: number;
}
