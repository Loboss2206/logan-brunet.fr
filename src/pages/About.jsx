import '../tailwind.css';
import '../App.css';
import Menu from '../components/Menu';
import Main from '../components/Main';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Interests from '../components/Interests';
import Footer from '../components/Footer';

function About() {

    return (
        <div className="App min-h-screen flex flex-col">
            <Menu />
            <div className="flex-grow">
                <Main />
                <Projects />
                <Skills />
                <Education />
                <Interests />
            </div>
            <Footer />
        </div>
    );
}

export default About;