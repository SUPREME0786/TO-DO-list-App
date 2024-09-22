export interface Task {
    id?: number;
    title: string;
    description: string;
    assignedTo?: string; // New field
    status?: string; // New field
    dueDate?: string; // New field (consider using Date type)
    priority?: string; // New field
    comments?: string; // New field
    completed?: boolean;
  }
  