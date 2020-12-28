import { DelegationTaskType, Frequency, Status } from './../_constants';

export class Delegation {
  id!: number;
  createdAt!: string;
  status!: Status;
  delegatorName?: string;
  delegateeName?: string;
  tasks!: Task[];
  frequency!: Frequency;
  startDate!: string;
  endDate!: string;
  picture!: string;
  entitlements!: Entitlements;
}

export class Task {
  applicationKey!: string;
  taskList!: string[];
  typeKey!: DelegationTaskType;
}

export class Entitlements {
  canEdit!: boolean;
  canCancel!: boolean;
}

export enum Mode {
  Edit = 'Edit',
  View = 'View',
  New = 'New',
  Empty = 'Empty'
}
