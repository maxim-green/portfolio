import React, {useEffect, useRef, useState} from 'react'
import styles from './FloatingCard.module.scss'

const FloatingCard: React.FC<{
    children?: Array<React.ReactElement | string> | React.ReactElement | string
}> = ({
          children
      }) => {
    const [wrapperTransform, setWrapperTransform] = useState('')
    const [mouseIn, setMouseIn] = useState(false)
    const [visibleChildIndex, setVisibleChildIndex] = useState(0)
    const [isTurning, setIsTurning] = useState(false)
    const wrapper = useRef<HTMLDivElement>(null)


    const maxRotateX = 10
    const maxRotateY = 10

    const mouseMoveHandler = (event: React.MouseEvent) => {
        // Get mouse position
        if (wrapper.current) {
            const fcRect = wrapper.current.getBoundingClientRect()

            const fcHalfHeight = Math.round(fcRect.height / 2)
            const fcHalfWidth = Math.round(fcRect.width / 2)

            const fcOffset = {
                top: fcRect.top + document.body.scrollTop,
                left: fcRect.left + document.body.scrollLeft
            }

            const mouseX = (event.pageX - fcOffset.left) | 0
            const mouseY = (event.pageY - fcOffset.top) | 0

            const diffX = -1 * (fcHalfWidth - mouseX)
            const diffY = fcHalfHeight - mouseY
            const rotateX = diffY / fcHalfHeight * maxRotateX
            const rotateY = diffX / fcHalfWidth * maxRotateY

            // Move the floating card
            setWrapperTransform('rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)')
        }
    }

    const mouseEnterHandler = (event: React.MouseEvent) => {
        setMouseIn(true)
    }

    const mouseLeaveHandler = (event: React.MouseEvent) => {
        setWrapperTransform('rotateX(0deg) rotateY(0deg)')
        setMouseIn(false)
    }

    let timeout: ReturnType<typeof setTimeout>;
    const clickHandler = () => {
        const childrenLength = React.Children.count(children)
        setIsTurning(true)
        timeout = setTimeout(() => {
            setVisibleChildIndex((prev) => (prev < childrenLength - 1) ? prev + 1 : 0)
            setIsTurning(false)
        }, 200)
    }

    useEffect(() => {
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className={styles.wrapper}>
            <div
                className={`${styles.inner} ${isTurning ? styles.turning : ''}`}
                ref={wrapper}
                style={{
                    transform: wrapperTransform,
                    transition: !mouseIn ? '.2s cubic-bezier(0.5,0.1,0.1,3)' : undefined
                }}
                onClick={clickHandler}
                onMouseMove={mouseMoveHandler}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
            >
                <div className={styles.border}>
                    {React.Children.map(children, (child, index) => {
                        return <div className={`${styles.content} ${index === visibleChildIndex ? styles.visible : ''}` }>{child}</div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default FloatingCard