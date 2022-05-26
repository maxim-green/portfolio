import React from 'react'
import image from 'public/avatar.png'
import styles from 'components/Avatar/Avatar.module.scss'
import Image from 'next/image'

const Avatar = () => {
return (
    <div className={styles.wrapper}>
        <img src={'/avatar.png'} width={220} height={220} alt={'avatar'}/>
    </div>
)
}

export default Avatar
