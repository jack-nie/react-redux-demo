import React from 'react'
import Footer from './Footer'
import HooksDemo  from './HooksDemo'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibilityTodoList'
import AsyncApp from '../containers/AsyncApp'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <AsyncApp />
    <HooksDemo />
  </div>
)

export default App