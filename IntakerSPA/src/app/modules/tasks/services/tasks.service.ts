import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { Task } from "../../../core/models/task.type";
import { HttpClient } from "@angular/common/http";
import { ApiResponse } from "../../../core/models/api-response";
import { CreateTaskCommand } from "../../../core/models/create-task.type";
import { UpdateTaskStatusCommand } from "../../../core/models/update-task-status.type";

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    readonly apiUrl = environment.baseApiUrl;

    private _tasks$ = new BehaviorSubject<Task[] | null>(null);

    get tasks$() {
        return this._tasks$.asObservable();
    }

    constructor(private readonly httpClient: HttpClient) {}

    public getTasks(): Observable<ApiResponse<Task[]>> {
        return this.httpClient.get<ApiResponse<Task[]>>(`${this.apiUrl}/api/tasks`).pipe(
            tap((data) => {
                this._tasks$.next(data.data);
            })
        );
    }

    public createTask(data: CreateTaskCommand): Observable<ApiResponse<Task>> {
        return this.httpClient.post<ApiResponse<Task>>(`${this.apiUrl}/api/tasks`, data);
    }

    public updateTaskStatus(data: UpdateTaskStatusCommand): Observable<ApiResponse<Task>> {
        return this.httpClient.patch<ApiResponse<Task>>(`${this.apiUrl}/api/tasks/status`, data);
    }
}