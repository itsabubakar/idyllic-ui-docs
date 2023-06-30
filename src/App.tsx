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

import Context from './context/Context';

import Button from './pages/Button/Button';
import ButtonUsage from './pages/Button/ButtonUsage';
import ButtonProps from './pages/Button/ButtonProps';

const App = () => {
  return (
    <div className='relative'>
      <Context>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/documentation' element={<Documentation />}>
              <Route path='installation' element={<Installation />} />
              <Route path='configuration' element={<Configuration />} />
              {/* Ui components */}
              {/* <Route path='alert' element={<Alert />} /> */}
              <Route path='button' element={<Button />}>
                <Route path='/documentation/button' element={<ButtonUsage />} />
                <Route path='props' element={<ButtonProps />} />
              </Route>
              {/* <Route path='container' element={<Container />} /> */}
              {/* <Route path='form' element={<FormControl />} /> */}
              {/* <Route path='header' element={<Header />} /> */}
              {/* <Route path='spinner' element={<Spinner />} /> */}
              {/* <Route path='text' element={<Text />} /> */}

            </Route>
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </Context>
    </div>
  )
}
export default App