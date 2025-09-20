export type TodoStatus = 'todo' | 'in-progress' | 'done'

export interface TodoItem {
  id: string
  text: string
  status: TodoStatus
}