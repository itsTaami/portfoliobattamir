import logo from "./logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SocialIcon
          url="https://twitter.com/jaketrent"
          bgColor="red"
          className="App-logo"
        /> */}

        <motion.div
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{ duration: 5 }}
        >
          <SocialIcon
            network="pinterest"
            style={{ height: 150, width: 150 }}
            className="App-logo"
          />
          <SocialIcon
            network="twitter"
            style={{ height: 150, width: 150 }}
            className="App-logo"
          />
          <SocialIcon
            network="facebook"
            style={{ height: 150, width: 150 }}
            className="App-logo"
          />
          <SocialIcon
            network="instagram"
            style={{ height: 150, width: 150 }}
            className="App-logo"
          />
        </motion.div>

        <h1 style={{ fontWeight: "normal" }}>
          Life is simple{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Eat", "Sleep", "Code", "Repeat!"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        {/* <h1>
          <Typewriter words={["Hello", "Pinecone"]} loop={false} />
        </h1> */}

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
