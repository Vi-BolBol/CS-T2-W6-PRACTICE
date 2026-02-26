import Header from "./components/Header";
import Scores from "./components/Scores";
import {HTML_RESULTS} from "./data"

function App() {
  return (
    <>
      <Header batchName="batch 2025"/>

      <main className="scores-container">
        <Scores courseName="HTML" courseResults={HTML_RESULTS}/>
      </main>
    </>
  );
}

export default App;
