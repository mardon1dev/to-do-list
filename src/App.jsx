import Form from './components/Form'
import List from './components/List'
import { TodoContext } from './context/Context'
import './App.css'
import Top from './components/Top'

function App() {
  
  return (
    <TodoContext>
      <div className='w-full flex items-center justify-center h-screen'>
        <div className='max-w-[300px] w-full mx-auto flex justify-start flex-col border border-[#000000] rounded-lg h-[500px] p-2 relative overflow-hidden'>
          <h1 className='text-left my-2 font-semibold text-xl'>To-Do List</h1>
          <Top />
          <Form />
          <List />
          <a href="https://github.com/mardon1dev/to-do-list" target='_blank' className='text-center mt-2 text-sm'>Made by Mardon1dev</a>
        </div>
      </div>
    </TodoContext>
  )
}

export default App
