import { Todo, TodoListState } from '../Interface/Todo/TodoInterface';


const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const GET_TODO_LIST = 'GET_TODO_LIST';
const UPDATE_TODO = 'UPDATE_TODO';

type addTodoAction = {
    type: typeof ADD_TODO,
    payload: string
}

type getTodoListAction = {
    type: typeof GET_TODO_LIST,
    payload: Todo[]
}

type deleteTodoAction = {
    type: typeof DELETE_TODO,
    payload: number
}

type udpateTodoAction = {
    type: typeof UPDATE_TODO,
    payload: number
}

export type Action = addTodoAction | getTodoListAction | deleteTodoAction | udpateTodoAction

const initialState = {
    todos: []
}

export const todolistReducer = (state: TodoListState = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, { id: ++state.todos.length, name: action.payload, isDone: false }] };
        case 'GET_TODO_LIST':
            return { ...state, todos: action.payload };
        case 'DELETE_TODO':
            return { ...state, todos: state.todos.filter(x => x.id !== action.payload) };
        case 'UPDATE_TODO':
            const todoIndex = state.todos.findIndex(x => x.id === action.payload);
            state.todos[todoIndex].isDone = true;
            return { ...state, todos: [...state.todos] };
        default:
            return state;
    }
}