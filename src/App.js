import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs'
import {useState}from 'react';

function App() {
  const[tabs,setTabs] = useState([
    {
      title:"Tab 1",
      content:"WAZZZAAA",
    },

    {
      title:"Tab 2",
      content:"WAAAAZZZZZZZAAAAAAAAAAAAAAAA"
    },

    {
      title:"Tab 3",
      content:"WAZZZZZZZAZAZAAZAZAAZAAAAAAAAAAAAZAZAZAA"
    }
  ])
  return (
    <div className="App">
      <Tabs tabs = {tabs}></Tabs>
      
    </div>
  );
}

export default App;
