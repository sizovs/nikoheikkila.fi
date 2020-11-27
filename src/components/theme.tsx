import React, { CSSProperties } from 'react'
import useDarkMode, { DarkModeConfig } from 'use-dark-mode'

// @ts-ignore
import sun from '../assets/sun.png'

// @ts-ignore
import moon from '../assets/moon.png'

interface Props extends DarkModeConfig {
  dark?: boolean
}

const ThemeToggle: React.FunctionComponent<Props> = ({ dark = true }) => {
  const { toggle, value: enabled } = useDarkMode(dark, {
    classNameLight: 'light',
    classNameDark: 'dark',
    storageKey: 'darkMode'
  })

  const iconStyle: CSSProperties = {
    backgroundColor: '#000000',
    position: 'absolute',
    top: 10,
    left: 0,
  }

  return (
    <section className="theme-toggle">
      <button type="button" onClick={toggle} aria-label="Switch between light and dark themes">
        <img style={iconStyle} src={enabled ? sun : moon} alt="Sun Icon" />
        <img style={iconStyle} src={enabled ? moon : sun} alt="Moon Icon" />
      </button>
    </section>
  )
}

export default ThemeToggle
