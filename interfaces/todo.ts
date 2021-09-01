export interface ITodo {
    items: IItem[]
}

export interface IItem {
    id: string;
    userId: string;
    text: string;
    complete: boolean;
}