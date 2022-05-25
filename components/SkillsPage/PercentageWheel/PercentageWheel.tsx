import React from 'react'
import styles from './PercentageWheel.module.scss'
import circle from '../../../public/circle-path.svg'
import Image from 'next/image'

const PercentageWheel: React.FC<{ percentage: number }> = ({percentage}) => {
    //-135deg == 0%, 45deg == 50%, 225deg == 100%
    const fillerRotation = -135 + 3.6 * percentage
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>{percentage}%</div>
            <div className={styles.wheel}>
                {/*<CircleSVG/>*/}
                <CircleSVG percentage={percentage}/>
            </div>
            {/*<div className={styles.empty}/>*/}
            {/*<div className={styles.filler} style={{transform: `translateX(-50%) translateY(-50%) rotate(${fillerRotation}deg)`}}/>*/}
            {/*{percentage < 50 && <div className={styles.mask}/>}*/}
            {/*{percentage > 50 && <div className={styles.halfFill}/>}*/}
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
