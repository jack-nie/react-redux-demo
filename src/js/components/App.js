import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibilityTodoList'
import AsyncApp from '../containers/AsyncApp'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <AsyncApp />
  </div>
)

export default App