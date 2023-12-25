import React from 'react'
// import { Button, Drawer } from 'antd';
import logo from './logo.svg';
import MapT from './Map_T';
import MapB from './Map_B';
import MapG from './Map_G';
import './App.css';

function App() {
  console.log("读取document相关属性 ==========>", "title", document.title, "children", document.children, "characterSet", document.characterSet);
  document.title="我是子应用title"
  // const [open, setOpen] = useState(false);

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  // const onClose = () => {
  //   setOpen(false);
  // };

  const testClick = () => {
    console.log('react17: test click')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p clstag="pageclick|keycount|home2013|08a" onClick={testClick}>
          微应用 React@{React.version}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <h1>抽屉</h1>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer> */}
      <MapT/>
      <MapB/>
      <MapG/>
    </div>
  );
}

export default App;
