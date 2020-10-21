import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <div id="footer">
      <span>© {currentYear} Nicolas St-Amour</span>
      <span className="divider">|</span>
      <span>
        {t('hostedBy')}{' '}
        <a href="https://github.com/stamoun/stamoun.github.io" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </span>
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/stamoun/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon linked-in-icon" />
        </a>
        <a href="https://github.com/stamoun" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon github-icon" />
        </a>
        <a href="https://twitter.com/stamoun" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon twitter-icon" />
        </a>
      </div>
    </div>
  );
};
