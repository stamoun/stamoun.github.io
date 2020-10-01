import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { faGithub, faLinkedin, faSoundcloud, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <div className="footer">
      <span>© {currentYear} Nicolas St-Amour</span>
      <span className="footer__divider">|</span>
      <span>
        {t('hostedBy')} <a href="https://github.com/stamoun/stamoun.github.io">GitHub</a>
      </span>
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/stamoun/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon linked-in-icon" />
        </a>
        <a href="https://github.com/stamoun" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon github-icon" />
        </a>
        <a href="https://twitter.com/stamoun" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon twitter-icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCSDesOZxpvrg32xkBsxONgg" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="social-icon youtube-icon" />
        </a>
        <a href="https://twitch.tv/morgrog" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitch} className="social-icon twitch-icon" />
        </a>
        <a href="https://soundcloud.com/morgrog78" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSoundcloud} className="social-icon soundcloud-icon" />
        </a>
      </div>
    </div>
  );
};
