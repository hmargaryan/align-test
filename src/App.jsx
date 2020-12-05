import React from 'react'
import Team from './components/Team/Team'
import Score from './components/Score/Score'

import styles from './App.module.scss'
import data from './data'
import psgLogo from './images/psgLogo.png'
import psgLogo2x from './images/psgLogo2x.png'
import bayernLogo from './images/bayernLogo.png'
import bayernLogo2x from './images/bayernLogo2x.png'

const App = () => {
  return (
    <main role="main" className={styles.wrapper}>
      <h1 className="visually-hidden">Align Technology Test</h1>
      <Team
        image={psgLogo}
        image2x={psgLogo2x}
        name={data.first.name}
        players={data.first.players}
      />
      <Score score={data.score} />
      <Team
        image={bayernLogo}
        image2x={bayernLogo2x}
        name={data.second.name}
        players={data.second.players}
      />
    </main>
  )
}

export default App
