import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages/Home"
import Error from "./pages/Error"
import Documentation from "./pages/Documentation"
import Navbar from './components/Navbar';
import Installation from './pages/Installation';
import Configuration from './pages/Configuration';

import Alert from './pages/components/Alert';
// import Button from './pages/ui/Button';
// import Container from './pages/ui/Container';
// import FormControl from './pages/ui/FormControl';
// import Header from './pages/ui/Header';
// import Spinner from './pages/ui/Spinner';
// import Text from './pages/ui/Text';


const App = () => {
  return (
    <div className='h-full relative'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/documentation' element={<Documentation />}>
            <Route path='installation' element={<Installation />} />
            <Route path='configuration' element={<Configuration />} />
            {/* Ui components */}
            <Route path='alert' element={<Alert />} />
            {/* <Route path='button' element={<Button />} />
            <Route path='container' element={<Container />} />
            <Route path='form' element={<FormControl />} />
            <Route path='header' element={<Header />} />
            <Route path='spinner' element={<Spinner />} />
            <Route path='text' element={<Text />} /> */}

          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App