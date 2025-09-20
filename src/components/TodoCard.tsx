import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TodoItem } from '@/types/todo'

interface TodoCardProps {
  todo: TodoItem
  onMoveLeft: (id: string) => void
  onMoveRight: (id: string) => void
  canMoveLeft: boolean
  canMoveRight: boolean
}

export function TodoCard({ todo, onMoveLeft, onMoveRight, canMoveLeft, canMoveRight }: TodoCardProps) {
  return (
    <Card className="mb-3">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <p className="flex-1 text-sm">{todo.text}</p>
          <div className="flex gap-2 ml-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onMoveLeft(todo.id)}
              disabled={!canMoveLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onMoveRight(todo.id)}
              disabled={!canMoveRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}