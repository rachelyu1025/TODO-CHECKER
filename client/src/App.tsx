import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo';
import Achieve from './components/achieve/Achieve';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import { SidebarProvider } from './context/SidebarContext';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className=' bg-background'>
        <BrowserRouter>
          <div className='flex flex-row w-screen h-screen'>
            <SidebarProvider>
              <Menu />
              <Sidebar />
            </SidebarProvider>
            <Routes>
              <Route path='/' element={<Todo />} />
              <Route path='/achieve' element={<Achieve />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
