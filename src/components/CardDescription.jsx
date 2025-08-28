const CardDescription = (languageData) => {
  return (
    <div>
      <h5>{languageData.language.title}</h5>
      <p>{languageData.language.description}</p>
    </div>
  );
};

export default CardDescription;