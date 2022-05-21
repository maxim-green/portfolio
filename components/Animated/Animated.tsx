import styles from './Animated.module.scss'
import React from 'react'


const Animated: React.FC<{
    children: React.ReactElement,
    phase?: 'mounted' | 'mounting' | 'unmounted' | 'unmounting'
    delay?: number
}> = ({
          children,
          phase= 'unmounted',
          delay = 0
      }) => {
    return (
        <div className={`${styles.wrapper} ${styles[phase]}`} style={{animationDelay: `${delay}ms`}}>
            {children}
        </div>
    )
}

export default Animated
