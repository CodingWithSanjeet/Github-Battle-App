import React from "react";
import { ThemeConsumer } from "../context/theme";
import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy,
  FaSearch,
  FaTimesCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Instruction = () => {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="enhanced-instruction-container">
          <h1 className="enhanced-title">How to Battle</h1>
          <div className="instruction-steps">
            <div className="instruction-step">
              <div className={`step-icon-container ${theme === "Dark" ? "step-dark" : "step-light"}`}>
                <FaUserFriends className="step-icon" size={60} />
              </div>
              <h3 className="step-title">Enter Players</h3>
              <p className="step-description">Add two GitHub usernames to compare</p>
              <div className="step-number">1</div>
            </div>
            
            <div className="instruction-step">
              <div className={`step-icon-container ${theme === "Dark" ? "step-dark" : "step-light"}`}>
                <FaFighterJet className="step-icon" size={60} />
              </div>
              <h3 className="step-title">Start Battle</h3>
              <p className="step-description">Compare profiles and repositories</p>
              <div className="step-number">2</div>
            </div>
            
            <div className="instruction-step">
              <div className={`step-icon-container ${theme === "Dark" ? "step-dark" : "step-light"}`}>
                <FaTrophy className="step-icon" size={60} />
              </div>
              <h3 className="step-title">See Winner</h3>
              <p className="step-description">Discover who has the better profile</p>
              <div className="step-number">3</div>
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
};

const PlayerInput = ({ label, onSubmit }) => {
  const [userName, setUserName] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName.trim()) {
      onSubmit(userName.trim());
    }
  };
  const onUsernameChanged = (event) => {
    setUserName(event.target.value);
  };
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`enhanced-player-input ${theme === "Dark" ? "player-input-dark" : "player-input-light"}`}>
          <h3 className="player-input-label">{label}</h3>
          <form className="player-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                value={userName}
                onChange={onUsernameChanged}
                placeholder="Enter GitHub username..."
                className="enhanced-input"
              />
              <button 
                type="submit" 
                className={`enhanced-submit-btn ${!userName.trim() ? 'disabled' : ''}`}
                disabled={!userName.trim()}
              >
                <FaSearch size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </ThemeConsumer>
  );
};

const PlayerPreview = ({ username, onReset }) => {
  return (
    <ThemeConsumer>
      {({ theme }) => {
        return (
          <div className={`enhanced-player-preview ${theme === "Dark" ? "preview-dark" : "preview-light"}`}>
            <div className="preview-header">
              <span className="preview-status">Ready</span>
              <button
                className="enhanced-remove-btn"
                onClick={() => onReset(null)}
                title="Remove player"
              >
                <FaTimesCircle size={18} />
              </button>
            </div>
            
            <div className="preview-content">
              <div className="preview-avatar-container">
                <img
                  className="preview-avatar"
                  src={`https://github.com/${username}.png?size=200`}
                  alt={`avatar of ${username}`}
                />
                <div className="avatar-ring"></div>
              </div>
              
              <div className="preview-info">
                <a
                  className="preview-username"
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {username}
                </a>
                <span className="preview-label">GitHub Profile</span>
              </div>
            </div>
          </div>
        );
      }}
    </ThemeConsumer>
  );
};
const Battle = () => {
  const [playerOne, setPlayerOne] = React.useState(null);
  const [playerTwo, setPlayerTwo] = React.useState(null);
  const [profile, setProfile] = React.useState();
  const handleSubmit = (playerId, playerName) => {
    playerId === "playerOne"
      ? setPlayerOne(playerName)
      : setPlayerTwo(playerName);
  };
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <>
          <Instruction />
          <div className="enhanced-players-section">
            <h1 className="players-title">Choose Your Fighters</h1>
            <div className="players-grid">
              <div className="player-slot">
                {!playerOne ? (
                  <PlayerInput
                    label="Player One"
                    onSubmit={(playerName) =>
                      handleSubmit("playerOne", playerName)
                    }
                  />
                ) : (
                  <PlayerPreview
                    username={playerOne}
                    onReset={(playerName) =>
                      handleSubmit("playerOne", playerName)
                    }
                  />
                )}
              </div>
              
              <div className="battle-vs">
                <span className="vs-text">VS</span>
              </div>
              
              <div className="player-slot">
                {!playerTwo ? (
                  <PlayerInput
                    label="Player Two"
                    onSubmit={(playerName) =>
                      handleSubmit("playerTwo", playerName)
                    }
                  />
                ) : (
                  <PlayerPreview
                    username={playerTwo}
                    onReset={(playerName) =>
                      handleSubmit("playerTwo", playerName)
                    }
                  />
                )}
              </div>
            </div>
            
            {playerOne && playerTwo && (
              <div className="battle-action">
                <Link
                  className={`enhanced-battle-btn ${theme === "Dark" ? "battle-btn-dark" : "battle-btn-light"}`}
                  to={{
                    pathname: "battle/results",
                    search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
                  }}
                >
                  <FaFighterJet className="battle-icon" size={20} />
                  Start Battle
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </ThemeConsumer>
  );
};

export default Battle;
