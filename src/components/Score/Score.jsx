import React from 'react'

import styles from './Score.module.scss'

const Score = ({ score }) => {
  return (
    <span className={styles.score}>
      {score.join(':')}
    </span>
  )
}

export default Score
