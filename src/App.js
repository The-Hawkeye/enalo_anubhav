import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm';
import myImage  from "./assets/enalo1.jpeg"

function App() {
  return (
    <div className="App">
      <div className='img-container'>
        {/* <img src={myImage} alt="logo" /> */}
      </div>
      <div className='form-container'>
      <div>
      <div className='logo'>
          <img alt="logo"></img>
          <p>Or <span>Sign In</span></p>
        </div>
        <RegisterForm />
      </div>
      </div>
    </div>
  );
}

export default App;
