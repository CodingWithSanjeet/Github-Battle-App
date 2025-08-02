import React from "react";
import { ThemeConsumer } from "../../context/theme";

const Card = ({ login, headerText, subheaderText, url, href, children }) => {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`enhanced-card ${theme === "Dark" ? "enhanced-card-dark" : "enhanced-card-light"}`}>
          <div className="card-header">
            {headerText && (
              <div className="rank-badge">
                <span className="rank-number">{headerText}</span>
              </div>
            )}
          </div>
          
          <div className="card-avatar-section">
            <div className="avatar-container">
              <img src={url} alt={`avatar of ${login}`} className="enhanced-avatar" />
              <div className="avatar-overlay"></div>
            </div>
          </div>
          
          <div className="card-content">
            {subheaderText && (
              <h4 className="card-subtitle">{subheaderText}</h4>
            )}
            <h2 className="card-title">
              <a href={href} className="enhanced-link">
                {login}
              </a>
            </h2>
            <div className="card-stats">
              {children}
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
};

export default Card;
