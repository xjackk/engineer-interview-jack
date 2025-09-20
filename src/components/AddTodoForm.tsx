import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface AddTodoFormProps {
  onAddTodo: (text: string) => void
}

export function AddTodoForm({ onAddTodo }: AddTodoFormProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTodo(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-6">
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
  )
}