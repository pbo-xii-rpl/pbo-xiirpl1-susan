import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="navbar bg-blue-600">
      <div className="countainer flex mx-auto items-center">
          <div className="w-3/12">
          <div className="logo text-white text-center uppercase font-semibold">
            Naufal
          </div>
          </div>
          <div className="w-6/12">
          <div className="nav text-white text-center">
          <ul className="nav-item flex justify-center space-x-10 py-16">
              <li>Profiles</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contacts</li>
          </ul>          
    </div>
  </div>
  <div className="w-3/12">
  <div className="nav text-center">
    <a className="font-semibold text-yellow-300 font-semibold border
    border-yellow-300 rounded-full px-6 py-2">Contact</a>
    
  </div>
  </div>
  </div>
  </div>    
    
  );
}

export default App;
