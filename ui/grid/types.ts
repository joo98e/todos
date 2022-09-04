import { IToDo } from '@store/slices/types'

export interface IMakeGridProps {
  column: number
  gap?: number
  fr?: string
  items: IToDo[]
}
