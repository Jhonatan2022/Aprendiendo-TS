import { type TODO_FILTERS } from '../Const/const'

export interface Todo {
  id: string
  title: string
  completed: boolean
}
export type TodoId = Pick<Todo, 'id'>
export type ListTodos = Todo[]

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
