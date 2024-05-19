'use client'

import React from 'react'
import styles from './About.module.scss'
import ReactPlayer from "react-player";

const About = () => {
	return (
		<>
			<div className={styles.blockVideo}>
				<ReactPlayer
					url='https://www.youtube.com/watch?v=6Fv-wbsIA2s'
					controls
					width='100%'
					height='100%'
				/>
			</div>
			<div className={styles.blockInfo}>
				<div className={styles.line}></div>
				<h2 className={styles.nameAbout}>О нас</h2>
				<p className={styles.text}>
					Мы специализируемся на разработке высококачественных автоматизированных информационных систем,
					которые помогают нашим клиентам эффективно управлять данными, оптимизировать бизнес-процессы и
					повышать производительность. Наша цель - предоставлять инновационные и надежные решения, которые
					соответствуют самым высоким стандартам качества.
				</p>
			</div>
		</>
	)
}

export default About
