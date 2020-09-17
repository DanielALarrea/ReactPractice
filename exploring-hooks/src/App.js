// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, {useState} from "react";

// export default function Button() {
//     const [buttonText, setButtonText] = useState("Click me please");

//     return (
//         <button onClick={() => setButtonText("Thanks, been clicked!")}>
//             {buttonText}
//         </button>
//     );
// }

import React from "react";
import useFetch from "./useFetch";

export default function DataLoader(props) {
  const data = useFetch("http://localhost:3001/links");
  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  )
}