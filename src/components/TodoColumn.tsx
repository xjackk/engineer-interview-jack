import { TodoCard } from './TodoCard'
import { TodoItem, TodoStatus } from '@/types/todo'

interface TodoColumnProps {
  title: string
  status: TodoStatus
  todos: TodoItem[]
  onMoveLeft: (id: string) => void
  onMoveRight: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoColumn({ title, status, todos, onMoveLeft, onMoveRight, onDelete }: TodoColumnProps) {
  const filteredTodos = todos.filter(todo => todo.status === status)

  const getCanMoveLeft = (todoStatus: TodoStatus) => {
    return todoStatus !== 'todo'
  }

  const getCanMoveRight = (todoStatus: TodoStatus) => {
    return todoStatus !== 'done'
  }

  return (
    <div className="flex-1 min-h-96">
      <div className="bg-gray-100 rounded-lg p-4 h-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
        <div className="space-y-2">
          {filteredTodos.length === 0 ? (
            <p className="text-gray-500 text-center text-sm py-8">No items</p>
          ) : (
            filteredTodos.map(todo => (
              <TodoCard
                key={todo.id}
                todo={todo}
                onMoveLeft={onMoveLeft}
                onMoveRight={onMoveRight}
                onDelete={onDelete}
                canMoveLeft={getCanMoveLeft(todo.status)}
                canMoveRight={getCanMoveRight(todo.status)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
