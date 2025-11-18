import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function SidebarDarkModeToggle(): React.ReactElement {
  const {colorMode, setColorMode} = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={styles.darkModeToggle}>
      <div className={styles.toggleContainer}>
        <button
          className={`${styles.toggleSwitch} ${colorMode === 'dark' ? styles.dark : styles.light}`}
          onClick={toggleColorMode}
          type="button"
          aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span className={styles.toggleSlider}>
            <span className={styles.sliderIcon}>
              {colorMode === 'dark' ? '🌙' : '🌞'}
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}