import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import { SidebarProvider } from './context/SidebarContext';
import Todo from './pages/Todo';

function App() {
  return (
    <div className='bg-background'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo />} />
          {/* <Route path="/" element={<Achieve />}/> */}
        </Routes>
        <SidebarProvider>
          <Menu />
          <Sidebar />
        </SidebarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
