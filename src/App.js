import './App.css';
import Container from './components/Container/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import QA from './components/QA/QA';
function App() {
  return (
    <div>
      <Header></Header>
      <h5>Choose your perfect course for you...!!!</h5>
      <Container></Container>
      <QA></QA>
    </div>
  );
}

export default App;
