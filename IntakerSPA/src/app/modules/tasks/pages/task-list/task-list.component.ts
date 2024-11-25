import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TasksService } from "../../services/tasks.service";
import { TaskComponent } from "../../components/task/task.component";
import { AddTaskComponent} from "../../components/add-task/add-task.component";

@Component({
	selector: 'app-task-list',
	templateUrl: 'task-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, ReactiveFormsModule, TaskComponent, AddTaskComponent],
	standalone: true
})
export class TaskListComponent implements OnInit {

    public tasks$ = this.tasksService.tasks$;

    constructor(private readonly tasksService: TasksService) {}
    
    ngOnInit(): void {
        this.tasksService.getTasks().subscribe();
    }

}
