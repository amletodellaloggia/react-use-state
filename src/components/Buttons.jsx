import { useState } from "react";
import LanguagesList from "./LanguagesList";

const Buttons = ({ onSelect }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(LanguagesList);

  const handleClick = (lang) => {
    setSelectedLanguage(lang);
    if (onSelect) {
      onSelect(lang);
    }
  };

  return (
    <ul className="nav nav-pills card-header-pills">
      {LanguagesList.map(function (lang) {
        return (
          <li key={lang.id}>
            <button
              className="btn btn-primary"
              onClick={function () {
                handleClick(lang);
              }}
            >
              {lang.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Buttons;
