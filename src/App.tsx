import React, { useState } from 'react';
import './App.css';

const ValentinePage: React.FC = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);


  const yesButtonSize = noCount * 20 + 16; 

  const getNoButtonText = () => {
    const phrases = [
      "Nem",
      "Ne már Dóri 😔!",
      "De tényleg?",
      "Gondold át újra!",
      "Utolsó esély!",
      "Biztos nem?",
      "Meg fogod bánni!",
      "Most már nagyon szomorú vagyok...💔",
      "Oké, beszéltem a anyukáddal, ő is azt akarja!",
      "Ne csináld ezt velem!",
      "Megszakad a szívem 😭",
      "Na jó, nem kérdezem többet...",
      "Csak vicceltem... kérlek szépen🥹"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="container">
      {yesPressed ? (
        <div className="success-container">
          <img 
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
            alt="Macik csókolóznak" 
            className="cute-gif"
          />
          <h1 className="success-text">Tudtam én cula! ❤️</h1>
          <p className="date-text">Szombaton eljönnél velem a pizza teraszba?</p>
        </div>
      ) : (
        <div className="question-container">
          <img 
            src="https://tenor.com/view/bubu-dudu-bubu-dudu-bear-panda-gif-13168878375741792886.gif" 
            alt="Maci kérlel" 
            className="cute-gif"
          />
          <h1 className="question-text">Dóri leszel a Valentinom?</h1>
          
          <div className="button-container">
            <button
              className="yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Igen
            </button>

            <button
              className="no-button"
              onClick={() => setNoCount(noCount + 1)}
            >
              {getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValentinePage;