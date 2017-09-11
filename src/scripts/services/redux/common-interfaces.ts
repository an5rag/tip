// Action and Action Creators
export interface IAction {
  type: string;
  payload?: any;
}

type IRootThunkActionCreator = (dispatch: (...args : any[]) => any) => any;

export type IActionCreator = (...args: any[]) => IAction | IRootThunkActionCreator;
