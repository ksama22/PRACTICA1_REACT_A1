import './App.css';
import { UserComponent, NavBarComponent } from './User'

function App() {
  return (
    <div className="App">
      <NavBarComponent/>
      <UserComponent name="Kevin" surname="Sama" age={22} />
      <UserComponent name="Jose" surname="Ramirez" age={12} />
    </div>
  );
};

export default App;
