
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes }from 'react-router-dom'
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from "./pages/Home"
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Error from './pages/Error'


function App() {
  return( 
    <ErrorBoundary fallback={<Error />}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;
