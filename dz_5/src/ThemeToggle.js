import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './action';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div style={{
      backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#000000' : '#ffffff',
      flexDirection: 'column',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1>Смена темы</h1>
      <button onClick={handleToggle}>
        Смена на {theme === 'light' ? 'Dark' : 'Light'} тему
      </button>
      <p>Тема на странницы: {theme}</p>
    </div>
  );
};

export default ThemeToggle;