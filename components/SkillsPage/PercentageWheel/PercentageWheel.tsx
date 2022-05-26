import React from 'react'
import styles from './PercentageWheel.module.scss'

const PercentageWheel: React.FC<{ percentage: number }> = ({percentage}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>{percentage}%</div>
            <div className={styles.wheel}>
                <div className={styles.filler}><CircleSVG percentage={percentage}/></div>
                <div className={styles.background}><CircleSVG percentage={100}/></div>
            </div>
        </div>
    )
}

const CircleSVG: React.FC<{percentage: number}> = ({percentage}) => {
    const validatedPercantage = percentage / 100 > 1 ? 1 : percentage / 100 < 0 ? 0 : percentage / 100
    const r = 50
    const l = Math.round(2 * Math.PI * r)
    const dashOffset = l - l * validatedPercantage
    return (<svg width={120} height={120} viewBox="-10 -10 120 120">
            <path
                className={styles.path}
                stroke='url(#linear)'
                strokeDasharray={l}
                strokeDashoffset={dashOffset}
                d={`
                    M 50, 50
                    m -${r}, 0
                    a ${r},${r} 0 1,0 ${r*2},0
                    a ${r},${r} 0 1,0 -${r*2},0
                    `}
            />
        </svg>
    )
}

export default PercentageWheel
