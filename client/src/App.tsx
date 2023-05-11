import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import { SidebarProvider } from './context/SidebarContext';
import Todo from './pages/Todo';

function App() {
  return (
    <div className=' bg-background'>
      <BrowserRouter>
        <div className='flex flex-row w-screen h-screen'>
          <SidebarProvider>
            <Menu />
            <Sidebar />
          </SidebarProvider>
          <Routes>
            <Route path='/' element={<Todo />} />
            {/* <Route path="/" element={<Achieve />}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
