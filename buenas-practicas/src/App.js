import './App.css';
import ButtonClass from './sections/herecia';
import ButtonComposicion from './sections/composicion';
import AppComponent from './sections/componentesFuncionales';
import FetchContainer from './sections/container-component/index';

function App() {
  return (
    <div className="App">
      <ButtonClass />
      <hr/>
      <ButtonComposicion />
      <hr/>
      <AppComponent />
      <hr/>
      <FetchContainer />
    </div>
  );
}

export default App;
