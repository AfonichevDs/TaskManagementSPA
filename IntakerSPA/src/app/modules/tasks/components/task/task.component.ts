import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Task } from "../../../../core/models/task.type";
import { Status } from "../../../../core/models/status.enum";

@Component({
	selector: 'app-task',
	templateUrl: 'task.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, ReactiveFormsModule],
	standalone: true
})
export class TaskComponent {
    public Status = Status;

    @Input() task: Task;

}
