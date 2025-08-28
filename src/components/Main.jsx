import { useState } from "react";
import Buttons from "./Buttons";
import CardDescription from "./CardDescription";

const Main = () => {
  const [currentLanguage, setCurrentLanguage] = useState(null);

  // Prepara la card da mostrare
  let cardElement = null;
  if (currentLanguage !== null) {
    cardElement = <CardDescription language={currentLanguage} />;
  }

  return (
    <main>
      <h1>LEARN WEB DEVELOPMENT</h1>
      <div className="card text-start w-50">
        <div className="card-header">
          <Buttons onSelect={setCurrentLanguage} />
        </div>
        <div className="card-body">
          {cardElement}
        </div>
      </div>
    </main>
  );
};

export default Main;