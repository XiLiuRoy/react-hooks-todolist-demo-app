import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../Actions/todoActions';

export const TodoInput: React.FC = () => {

    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const updateTodo = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    const onButtonClick = () => {
        dispatch(addTodoAction(todo))
        setTodo("");
    }

    return <div className="row justify-content-center py-5">
        <div className="col-md-5 d-flex mb-3">
            <input name="todo" className="form-control" placeholder="what's in your mind" value={todo} onChange={updateTodo} />
            <button type="button" className="btn btn-primary" onClick={onButtonClick}>Add</button>
        </div>
    </div>
}