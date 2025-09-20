import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TodoItem } from '@/types/todo'

interface TodoCardProps {
  todo: TodoItem
  onMoveLeft: (id: string) => void
  onMoveRight: (id: string) => void
  onDelete: (id: string) => void
  canMoveLeft: boolean
  canMoveRight: boolean
}

export function TodoCard({ todo, onMoveLeft, onMoveRight, onDelete, canMoveLeft, canMoveRight }: TodoCardProps) {
  return (
    <Card className="mb-3">
      <CardContent className="p-4">
        <div className="relative">
          <div className="flex items-center justify-between min-h-8">
            <p className="flex-1 text-sm pr-12">{todo.text}</p>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(todo.id)}
              className="absolute top-0 right-0 h-6 w-6 text-gray-400 hover:text-red-500 hover:bg-red-50"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
          <div className="flex justify-end gap-1 mt-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onMoveLeft(todo.id)}
              disabled={!canMoveLeft}
              className="h-6 w-6"
            >
              <ChevronLeft className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onMoveRight(todo.id)}
              disabled={!canMoveRight}
              className="h-6 w-6"
            >
              <ChevronRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}