import {Header} from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Footer  from './components/Footer';
import  Welcome  from './components/Welcome';
import  AllPortfolio  from './components/AllPortfolio';
import  Contact  from './components/Contact';
import  About  from './components/About';

import {Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div >
      <Header/>
      <Routes>
      <Route path={'/'} element={<Welcome/>} />
      <Route path={'/allPortfolio'} element={<AllPortfolio/>} />
      <Route path={'/cont'} element={<Contact/>} />
      <Route path={'/abt'} element={<About/>} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
