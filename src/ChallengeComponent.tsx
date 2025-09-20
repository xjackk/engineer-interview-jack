import { useState } from 'react'
import { TodoColumn } from './components/TodoColumn'
import { AddTodoForm } from './components/AddTodoForm'
import { TodoItem, TodoStatus } from './types/todo'

export function ChallengeComponent() {
  const [todos, setTodos] = useState<TodoItem[]>([])

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

  return (
    <div className="p-6">
      <div className="flex gap-6">
        <TodoColumn
          title="Todo"
          status="todo"
          todos={todos}
          onMoveLeft={moveLeft}
          onMoveRight={moveRight}
        />
        <TodoColumn
          title="In Progress"
          status="in-progress"
          todos={todos}
          onMoveLeft={moveLeft}
          onMoveRight={moveRight}
        />
        <TodoColumn
          title="Done"
          status="done"
          todos={todos}
          onMoveLeft={moveLeft}
          onMoveRight={moveRight}
        />
      </div>
      <AddTodoForm onAddTodo={addTodo} />
    </div>
  )
}
