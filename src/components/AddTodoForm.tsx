import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TodoItem } from '@/types/todo'

interface AddTodoFormProps {
  onAddTodo: (text: string) => void
  onClearAll: () => void
  todos: TodoItem[]
}

export function AddTodoForm({ onAddTodo, onClearAll, todos }: AddTodoFormProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTodo(text.trim())
      setText('')
    }
  }

  return (
    <div className="flex gap-2 mt-6">
      <form onSubmit={handleSubmit} className="flex gap-2 flex-1">
        <Input
          type="text"
          placeholder="Add a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={!text.trim()}>
          Add Todo
        </Button>
      </form>
      <Button
        type="button"
        variant="outline"
        onClick={onClearAll}
        disabled={todos.length === 0}
        className="text-red-600 hover:text-red-700 hover:bg-red-50"
      >
        Clear All
      </Button>
    </div>
  )
}