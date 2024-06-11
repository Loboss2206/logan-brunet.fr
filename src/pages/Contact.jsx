import '../App.css';
import Mail from '../components/Mail';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Menu />
      <div className="flex-grow">
        <Mail />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
