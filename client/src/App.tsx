import { useState, useEffect } from 'react';
import logo from './logo.svg';
import { get } from 'superagent';
import './App.css';

function App() {

  const [exampleRes, setExampleRes] = useState<string>("");

  const getFromServer = async () => {
    await get("http://localhost:80/example-route/").then((res) => {
      if (res.text) {
        setExampleRes(res.text);
      }
      return;
    }).catch((err) => {
      setExampleRes("Uh oh, there was an error with the request 😔")
    })
  }

  useEffect(() => {
    getFromServer();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {exampleRes ? exampleRes : "No response from server yet."}
        </p>
      </header>
    </div>
  );
}

export default App;
