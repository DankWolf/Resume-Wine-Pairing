import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SocialIcon } from 'react-social-icons';

const FETCH_URL = 'http://localhost:8080/api/wine';

function App() {
  const [flavorInput, setFlavorInput] = useState("");
  const [result, setResult] = useState();
  

function onSubmit(event) {
    event.preventDefault();
    console.log("submitting")
    fetch(`${FETCH_URL}/${flavorInput}`)
    .then(res => res.json())
    .then(result => {
      console.log('result: ', result)
    setResult(result);
    setFlavorInput("");
  })
    .catch(err => {
      console.log(err);
    })

}

  return (
      <div className="App">
       <section className = "Personal">
        <div>
          <img src='https://media.licdn.com/dms/image/D5603AQEq1vIM3IefpA/profile-displayphoto-shrink_400_400/0/1669171211909?e=1677110400&v=beta&t=_EjMgXT0BY27BO4ZAlf95xmkiXgllyorBjftn0LxJw0' layout="fill" objectFit="cover" className='profilePic'/>
        </div>
        <h1>CHRISTOPHER TENORIO</h1>
        <h3>Software Engineer & Lover of Wine</h3>
        <p>Enthusiastic and motivated self-learner</p>
        <div id='social'>
          <SocialIcon id= "linked" url= "https://www.linkedin.com/in/christopher-tenorio/"/> <SocialIcon url= "https://github.com/DankWolf"/> <SocialIcon url="https://twitter.com/ChrisATenorio" /><SocialIcon url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        </div>
       </section>

      <section>
        <img src='https://images.squarespace-cdn.com/content/v1/54b59944e4b098c8354feafa/93cd64b9-8796-4082-b777-ca9f5c9ff4ad/restaurant-wine-racks-highlight-wine-list.jpg?format=1500w' className='winePic'/>
      <h2>Let me help you find the right wines for any occassion</h2>
      <p>Input the main protein or dominant flavor that you want to pair</p>
      <p>Powered by Artificial Stupidity </p>
      </section>

      <section>
      <form onSubmit={onSubmit}>
        <input
        className='inputBox'
        type="text"
        name="wine"
        placeholder='Enter protein or dominant flavor'
        value={flavorInput}
        onChange={(e) => setFlavorInput(e.target.value)} 
        />
        <input type="submit" value="Pair wines" />
      </form>
      <div className="resultBox">{result}</div>
      </section>

    </div>
  )
}

export default App
