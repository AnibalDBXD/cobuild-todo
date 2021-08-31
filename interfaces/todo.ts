export interface ITodo {
    items: IItem[]
}

export interface IItem {
    id: string
    text: string
    completed: boolean
}