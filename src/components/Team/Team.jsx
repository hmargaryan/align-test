import React from 'react'

import styles from './Team.module.scss'

const Team = ({ image, image2x, name, players }) => {
  return (
    <div className={styles.team}>
      <img
        src={image}
        srcSet={`${image}, ${image2x} 2x`}
        alt={`${name} logo`}
        width={200}
        height={113}
        className={styles.logo}
      />
      <h2 className={styles.name}>{name}</h2>
      <ol>
        {players.map(({ name, surname, number }) => {
          return (
            <li key={`${name}-${surname}-${number}`} className={styles.player}>
              <span className={styles.playerNumber}>{number}</span>
              <p className={styles.playerName}>{name} {surname}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Team
