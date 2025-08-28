import LanguagesList from "./LanguagesList";

const Main = () => {
  const defaultLanguage = LanguagesList[0];

  return (
    <main>
      <h1>LEARN WEB DEVELOPMENT</h1>
      <div className="card text-start w-50">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            {LanguagesList.map((lang) => (
              <li>
                <button  key={lang.id} className="btn btn-primary">{lang.title}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">{defaultLanguage.title}</h5>
          <p className="card-text">{defaultLanguage.description}</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
