import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Status } from "../../../../core/models/status.enum";
import { TasksService } from "../../services/tasks.service";
import { switchMap, tap } from "rxjs";
import { CreateTaskCommand } from "../../../../core/models/create-task.type";

@Component({
	selector: 'app-add-task',
	templateUrl: 'add-task.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, ReactiveFormsModule],
	standalone: true
})
export class AddTaskComponent {
    public Status = Status;
    taskForm: FormGroup;

    constructor(private fb: FormBuilder, private readonly tasksService: TasksService) {
      this.taskForm = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(50)]],
        description: ['', [Validators.required, Validators.maxLength(200)]],
        status: [Status.NotStarted, Validators.required], 
        assignedTo: ['', Validators.required],
      });
    }
  
    onSubmit() {
      if (this.taskForm.valid) {
        const status = Number(this.taskForm.get('status')?.value);

        var data: CreateTaskCommand = {...this.taskForm.value, status: status };

        this.tasksService.createTask(data).pipe(
            switchMap(() => this.tasksService.getTasks()),
            tap(() => this.taskForm.reset())
        ).subscribe();
      }
    }
}
