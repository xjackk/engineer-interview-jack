import { TodoColumn } from './components/TodoColumn'
import { AddTodoForm } from './components/AddTodoForm'
import { TodoItem, TodoStatus } from './types/todo'
import { useLocalStorage } from './hooks/useLocalStorage'

export function ChallengeComponent() {
  // "storedValue, setValue, clearValue" from useLocalStorage hook
  const [todos, setTodos, clearTodos] = useLocalStorage<TodoItem[]>('todos', [])

  const generateId = () => crypto.randomUUID()

  const addTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: generateId(),
      text,
      status: 'todo'
    }
    setTodos(prev => [...prev, newTodo])
  }

  const moveLeft = (id: string) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        const statusMap: Record<TodoStatus, TodoStatus> = {
          'todo': 'todo',
          'in-progress': 'todo',
          'done': 'in-progress'
        }
        return { ...todo, status: statusMap[todo.status] }
      }
      return todo
    }))
  }

  const moveRight = (id: string) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        const statusMap: Record<TodoStatus, TodoStatus> = {
          'todo': 'in-progress',
          'in-progress': 'done',
          'done': 'done'
        }
        return { ...todo, status: statusMap[todo.status] }
      }
      return todo
    }))
  }

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const clearAllTodos = () => {
    clearTodos()
  }

  return (
    <div className="p-6">
      <div className="flex gap-6">
        <TodoColumn
          title="Todo"
          status="todo"
          todos={todos}
          onMoveLeft={moveLeft}
          onMoveRight={moveRight}
          onDelete={deleteTodo}
        />
        <TodoColumn
          title="In Progress"
          status="in-progress"
          todos={todos}
          onMoveLeft={moveLeft}
          onMoveRight={moveRight}
          onDelete={deleteTodo}
        />
        <TodoColumn
          title="Done"
          status="done"
          todos={todos}
          onMoveLeft={moveLeft}
          onMoveRight={moveRight}
          onDelete={deleteTodo}
        />
      </div>
      <AddTodoForm onAddTodo={addTodo} onClearAll={clearAllTodos} todos={todos} />
    </div>
  )
}
