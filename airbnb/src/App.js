import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Aboutme from './components/Aboutme'
import AboutData from './components/AboutData'

function App() {
  const aboutElements = AboutData.map((about, index) => {
    return ( < About 
      // key = { about.number } then remove index from the map fxn
      // {...about} you can use this also
      // number={about.number} or this 
      // header={about.header}
      // paragraph={about.paragraph}
    key={index}
    about={about} //but this is bettr
    />
    )
  });
  return (
    <div className="App">
      <Header />
      <Hero />
      <Contact />
      <div className='about-page'>
        <h2 className="about-header">My Expertise</h2>
        <div className="about-card">
          {aboutElements}
        </div>
      </div>
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;
