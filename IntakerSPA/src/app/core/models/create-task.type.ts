import { Status } from "./status.enum";

export interface CreateTaskCommand {
    name: string;
    description: string;
    status: Status;
    assignedTo: string;
}