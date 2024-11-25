import { Status } from "./status.enum";

export interface UpdateTaskStatusCommand {
    id: number;
    status: Status;
}