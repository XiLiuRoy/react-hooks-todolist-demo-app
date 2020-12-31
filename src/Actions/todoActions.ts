import { Dispatch } from "react";
import { addTodo, deleteTodo, getTodoList, putTodo } from "../API/ApiClient";
import { Action } from "../Reducers/todolistReducer";

export const getTodoListAction = (): Function => async (dispatch: Dispatch<Action>) => {
    const res = await getTodoList();
    dispatch({
        type: "GET_TODO_LIST",
        payload: res
    });
};

export const addTodoAction = (todo: string): Function => async (dispatch: Dispatch<Action>) =>{
    const res = await addTodo(todo);
    if (res){
        dispatch(    
            {
            type: "ADD_TODO",
            payload: todo
        });
    }
};

export const deleteTodoAction = (id: number): Function => async (dispatch: Dispatch<Action>) => {
    const res = await deleteTodo(id);
    if (res) {
        dispatch({
            type: "DELETE_TODO",
            payload: id
        });
    }
};

export const markTodoIsDoneAction = (id: number): Function => async (dispatch: Dispatch<Action>) => {
    const res = await putTodo(id);
    if (res) {
        dispatch({
            type: "UPDATE_TODO",
            payload: id
        });
    }
};