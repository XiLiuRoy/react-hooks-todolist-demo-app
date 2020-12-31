import { Todo } from "../Interface/Todo/TodoInterface";

export const getTodoList = (): Promise<Todo[]> => {
    return fetch('https://localhost:44313/api/Todo', {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'Application/json'
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err));
}

export const getTodoById = (id: string): Promise<boolean> => {
    return fetch(`https://localhost:44313/api/Todo/${id}`)
        .then(res => res.ok)
        .catch(err => {
            console.log(err);
            return false;
        })
}

export const putTodo = (id: number): Promise<boolean> => {
    return fetch(`https://localhost:44313/api/Todo/${id}`, {
        method: 'PUT',
        body: JSON.stringify(id),
        headers: {
            'Content-Type': 'Application/json'
        }
    }).then(res => res.ok)
        .catch(err => {
            console.log(err);
            return false;
        })
}

export const addTodo = (name: string): Promise<boolean> => {
    return fetch('https://localhost:44313/api/Todo', {
        method: 'POST',
        body: JSON.stringify(name),
        headers: {
            'Content-Type': 'Application/json'
        }
    }).then(res => res.ok)
        .catch(err => {
            console.log(err);
            return false;
        })
}

export const deleteTodo = (id: number): Promise<boolean> => {
    console.log(`https://localhost:44313/api/Todo/${id}`);
    return fetch(`https://localhost:44313/api/Todo/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'Application/json'
        }
    }).then(res => res.ok)
        .catch(err => {
            console.log(err);
            return false;
        })
}