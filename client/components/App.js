import './stylesheets/styles.css';
import { useState } from "react";

export default function App() {
    const [flavorInput, setFlavorInput] = useState("")
    const [result, setResult] = useState();

function onSubmit(event) {
    event.preventDefault();

}


return(
    <div>
        <h2>Wine Buddy - powered by Artificial Stupidity</h2>
        <h3>Find wines to pair with any meal or occassion</h3>
        <form onSubmit={onSubmit}>
          <input
          type="text"
          name="wineInput"
          placeholder="Enter protein or dominant flavor"
          value={flavorInput}
          onChange={(e) => setFlavorInput(e.target.value)}
          />
        </form>
    </div>
)

}