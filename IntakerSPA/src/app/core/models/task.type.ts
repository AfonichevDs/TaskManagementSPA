import { Status } from "./status.enum";

export interface Task {
    id: number;
    name: string;
    description: string;
    status: Status;
    assignedTo: string;
}