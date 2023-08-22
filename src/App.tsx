import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./app.css";
import { open } from '@tauri-apps/plugin-dialog'
import { Window, getCurrent } from "@tauri-apps/plugin-window";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <button onClick={ async () => { await open({ directory: true})}}>Open Directory</button>
      <button onClick={ async () => { await getCurrent().maximize()}}>Maximize Window</button>
      <button onClick={ async () => { console.log(await getCurrent().isMaximized())}}>Is Maximized?</button>
    </div>
  );
}

export default App;
