
import "./App.css";
import Card from "./Components/Card/Card";

import { Data } from "./data";

const App = () => {

  return (
    <>
      {Data ? (
        Data.map((e, i) => {
          return <Card key={i} id={e.id} imgSrc={e.imgSrc} title={e.title} desc={e.desc} />;
        })
      ) : <h3>Data Not Found...!</h3>}

    </>
  );
};

export default App;
