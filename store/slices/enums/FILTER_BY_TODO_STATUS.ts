// export enum STATUS_TODO {
//   ALL = "전체",
//   COMPLETE = "완료",
//   INCOMPLETE = "미완",
// }

type statusType = "ALL" | "COMPLETED" | "INCOMPLETE";

export default class FILTER_BY_TODO_STATUS {
  static readonly ALL = new FILTER_BY_TODO_STATUS("ALL", "전체");
  static readonly COMPLETED = new FILTER_BY_TODO_STATUS("COMPLETED", "완성");
  static readonly INCOMPLETE = new FILTER_BY_TODO_STATUS("INCOMPLETE", "미완");

  constructor(readonly type: statusType, readonly desc: string) {}
}
