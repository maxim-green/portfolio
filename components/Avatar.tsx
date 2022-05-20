import React from 'react'
import image from '../public/avatar.png'
import styles from '../styles/Avatar.module.scss'
import Image from 'next/image'

const Avatar = () => {
return (
    <div className={styles.wrapper}>
        <Image src={image}/>
    </div>
)
}

export default Avatar