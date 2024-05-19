import React from 'react'
import {dataK} from "@/components/NumberK/data/dataK";
import styles from './NumberK.module.scss'

const NumberK = () => {
	return (
		<>
			{dataK.map(elem => (
				<div key={elem.id} className={styles.blockInfo}>
					<p className={styles.num}>{elem.num}</p>
					<p className={styles.title}>{elem.title}</p>
				</div>
			))}
		</>
	)
}

export default NumberK