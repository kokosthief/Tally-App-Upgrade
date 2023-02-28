import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://hrwillmott.com" target="_blank">
          <img
            src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/512/external-counter-pharmacy-rabit-jes-outline-color-rabit-jes.png"
            className="logo react"
            alt="Tally Logo"
          />
        </a>
      </div>
      <p class="title is-1">Tally App</p>
      <p class="subtitle is-3">
        I called it tally bc everyone uses <i>"counter"</i>
      </p>
      <div class="card ">
        <div class="columns ">
          <div class="column">
            <p id="count-el" class="title is-1 ">
              {count}
            </p>
          </div>
        </div>
        <div class="buttons columns">
          <div class="column">
            <button
              onClick={() => setCount((count) => count + 1)}
              class="button is-primary is-light is-large"
            >
              +
            </button>
          </div>
          <div class="column">
            <button
              onClick={() => setCount((count) => count - 1)}
              class="button is-primary is-link is-light is-large"
            >
              -
            </button>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="content has-text-left pt-5">
          <p class="title is-4">Roadmap:</p>
          <ul>
            <li>fix row spacing</li>
            <li>add save button</li>
            <li>add reset button</li>
          </ul>
        </div>
        <div  >
          <p>
            <strong>Tally App</strong> built by{" "}
            <a href="https://hrwillmott.com">Henry Willmott</a>. Using{" "}
            <a href="https://vitejs.dev/">Vite + React</a> and styed with{" "}
            <a href="https://bulma.io/">Bulma CSS</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
