import "./App.css";
import { Navbar, Cta, Brand } from "./components/index";
import {
  Header,
  Wgpt,
  Features,
  Posibilities,
  Blogs,
  Footer,
} from "./containers/index";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Wgpt />
      <Features />
      <Posibilities />
      <Cta />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
