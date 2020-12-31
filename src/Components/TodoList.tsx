import { CSSProperties, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAction, getTodoListAction, markTodoIsDoneAction } from '../Actions/todoActions';
import { TodoListState } from '../Interface/Todo/TodoInterface';

export const TodoList: FC = () => {

    const todos = useSelector<TodoListState, TodoListState["todos"]>(state => state.todos);

    const dispatch = useDispatch();

    // Load Todolist
    useEffect(() => {
        dispatch(getTodoListAction())
    }, []);

    const onDeleteButtonClick = (id: number) => {
        dispatch(deleteTodoAction(id));
    }

    const onDoneButtonClick = (id: number) => {
        dispatch(markTodoIsDoneAction(id));
    }

    const inlineStyles: CSSProperties = {
        textDecoration: "line-through"
    }

    return <div className="row justify-content-center">
        <div className="col-md-5 list-group">
            <div>My Todo list:</div>
            {todos?.map(
                (todo) => {
                    return <div className="list-group-item d-flex justify-content-between" key={todo.id} style={todo.isDone ? inlineStyles : {}}>
                        {todo.name}
                        <div>
                            <button type="button" className="btn btn-danger" onClick={() => { onDeleteButtonClick(todo.id) }}>Delete</button>
                            <button type="button" className="btn btn-primary" onClick={() => { onDoneButtonClick(todo.id) }}>Done</button>
                        </div>
                    </div>
                }
            )}
        </div>
    </div>
}