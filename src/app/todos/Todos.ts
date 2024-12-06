import {Todo} from "./Todo";

export class Todos {
    todos: Todo[];
    total: number;
    skip: number;
    limit:number;


    constructor(todos: Todo[], total: number, skip: number, limit: number) {
        this.todos = todos;
        this.total = total;
        this.skip = skip;
        this.limit = limit;
    }
}