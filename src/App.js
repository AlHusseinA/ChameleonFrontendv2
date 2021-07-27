import Chat from './components/Chat';
import Event from './components/Event';
import Header from './components/Header';
import convStructureImage from 'D:/MSc AI and ML/CS5917 MSc Project in AI/My project/frontend/src/conversational_structure_chameleon_27072021.png';

import './App.css';


function App() {
  return (
    <div className="parent">
      <header>
        <Header />
      </header>
      <div className="" >
        <Event />
      </div>
      <main className="col-8">
        <Chat />
      </main>


      {/* <div className="right-side">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        {/* <img className="conversation-flow" src={convStructureImage} alt="Write something here" /> */}
      {/* </div> */} */}

    </div>
  );
}

export default App;
