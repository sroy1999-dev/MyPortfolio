import './App.scss';
import Header from "./components/Header/Header";
import Profile from './components/Profile/Profile';
import Learnings from './components/Learnings/Learnings';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Learnings />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
