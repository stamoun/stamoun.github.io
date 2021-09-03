import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.scss';

export const Header = (params: any) => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <div id="header">
      <span className="drop-button">
        <select onChange={changeLanguage}>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </span>

      <label className="switch">
        <input
          id="dark-mode-checkbox"
          type="checkbox"
          checked={params.useDarkTheme}
          onChange={({ target }) => params.setIsDarkHandler(target.checked)}
        />
        <div className="slider round" id="dark-mode-slider"></div>
      </label>
    </div>
  );
};
