export interface IError {
    isError: boolean;
    code: number;
    message: string;
}
export interface IClick {
    isClick: boolean;
    code: number;
    id?: number | string;
}

export interface IInitial {
    error: IError;
    isClicked: IClick[];
    cartPrice: number;
}