import './App.css';
import Photo from "./component/profile/ProfilePhoto"
import Name from "./component/profile/FullName"
import Address from './component/profile/Address'
import Content from "./Resume"

function App() {
  return (
    <div className="App">
      <div className="header">
        <Photo />
        <Name />
        <Address />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
}

export default App;
