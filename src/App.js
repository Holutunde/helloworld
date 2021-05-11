import logo from "./image/logo.svg"
import mockup from "./image/illustration-mockups.svg"
import './App.css';

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="logo"/>
      </header>
      <main>
        <img src={mockup} alt="mockup"/>
        <div className="content" >
          <h2>Build The Community Your Fans Will Love</h2>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion</p>
          <button>Register</button>
        </div>
      </main>
      <footer>
      <i class="fa fa-facebook"></i>
      <i class="fa fa-twitter"></i>
      <i class="fa fa-instagram" ></i>
    </footer>
    
    </> 
  );
}

export default App;
