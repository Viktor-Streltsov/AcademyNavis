'use client'

import React from 'react'
import Link from 'next/link'
import styles from './People.module.scss'
import {dataPeople} from "@/components/People/dataPeople/dataPeople";
import Sky from "@/components/People/icons/sky";

const People = () => {
	return (
		<div className={styles.People}>
			<h2 className={styles.headerPeople}>Наши довольные клиенты</h2>
			<ul className={styles.infoPeople}>
				{dataPeople.map(elem => (
					<li key={elem.id} className={styles.blocksPeople}>
						<div className={styles[elem.img]}></div>
						<p className={styles.namePeople}>
							{elem.desc}
						</p>
						<div className={styles.scy}>
							<Sky/>
						</div>
						<h2 className={styles.textPeople}>
							{elem.title}
						</h2>
						<p className={styles.textWork}>
							{elem.work}
						</p>
					</li>
				))}
			</ul>
			<div className={styles.linck}>
				<Link href={'/'} className={styles.btnRating}>Узнать больше</Link>
			</div>
		</div>
	)
}

export default People