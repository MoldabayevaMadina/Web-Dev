export interface Task {
    id: number;
    title: string;
    description: string;
    category: 'Work' | 'Personal' | 'Study';
    status: string;
    deadline: Date;
}
