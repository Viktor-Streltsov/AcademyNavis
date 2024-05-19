import React from 'react'
import styles from './TheJoinUs.module.scss'
import Img from "@/components/theJoinUs/icons/img";


const TheJoinUs = () => {
	return (
		<div className={styles.conteinerJoin}>
			<div className={styles.imageJoin}>
				<Img/>
			</div>
			<div className={styles.infoJoin}>
				<div className={styles.Line}></div>
				<h1 className={styles.nameHeader}>Почему <br/> Выбирают Нас</h1>
				<p className={styles.text}>
					В ОсОО IT Academy «Navis» мы гордимся тем, что предоставляем нашим клиентам лучшие IT-решения,
					соответствующие их уникальным потребностям.
				</p>
			</div>
		</div>
	)
}

export default TheJoinUs