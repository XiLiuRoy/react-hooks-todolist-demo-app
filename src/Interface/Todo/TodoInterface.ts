export interface Todo {
    id: number,
    name: string,
    isDone: boolean
}

export interface TodoListState{
    todos: Todo[]
}