import './App.css';
import Navigation from "./components/Navigation";
import Aside from './components/Aside';
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Navigation />
        <div className="Container">
            <Aside />
            <Main heading="Some Heading">
                <Posts />
            </Main>
        </div>
      <Footer />
    </div>
  );
}

export default App;
