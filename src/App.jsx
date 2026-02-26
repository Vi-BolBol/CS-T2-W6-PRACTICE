import Header from "./components/Header";
import Scores from "./components/Scores";
import * as data from "./data"

function App() {

  const courses = [
    {index: 0,name: "HTML", res: data.HTML_RESULTS},
    {index: 1, name: "Java", res: data.JAVA_RESULTS},
    {index: 2, name: "Python", res: data.PYTHON_RESULTS},
    {index: 3, name: "English", res: data.ENGLISH_RESULTS}
  ];

  return (
    <>
      <Header batchName="batch 2025"/>
      <main className="scores-container">
        {courses.map(i => (
          <Scores key={i.index} courseName={i.name} courseResults={i.res}/>
        ))}
      </main>
    </>
  );
}

export default App;
