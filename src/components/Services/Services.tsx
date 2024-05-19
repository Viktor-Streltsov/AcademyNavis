'use client'

import React from 'react'
import Link from 'next/link'
import styles from './Services.module.scss'
import {dataServices} from "@/components/Services/dataServices/dataServices";

const Services = () => {
	return (
		<div className={styles.services}>
			<h2 className={styles.headerServices}>Наши Услуги</h2>
			<div className={styles.textHeader}>
				Здесть вы узнаеье о услугах которые мы вам окажем
			</div>
			<ul className={styles.infoServices}>
				{dataServices.map(elem => (
					<li className={styles.blocksServices}>
						<div>
							{elem.img}
						</div>
						<p>
							{elem.title}
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

export default Services