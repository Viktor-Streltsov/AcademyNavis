'use client'

import React from 'react'
import Link from 'next/link'
import styles from './AnApproach.module.scss'
import {dataAnApproach} from "@/components/AnApproach/dataAnApproach/dataAnApproach";
import Arrowss from "@/components/AnApproach/icons/arrowss";

const AnApproach = () => {
	return (
		<div className={styles.anApproach}>
			<h2 className={styles.headerAnApproach}>Наш Подход</h2>
			<div className={styles.textHeader}>
				Индивидуальный подход , котрый мы разработали  поможет вам изучить новое
			</div>
			<ul className={styles.infoAnApproach}>
				{dataAnApproach.map(elem => (
					<li key={elem.id} className={styles.blocksAnApproach}>
						<div className={styles[elem.img]}>
							<div className={styles.saleLabel}>Sale</div>
						</div>
						<h2 className={styles.nameAnApproach}>
							{elem.title}
						</h2>
						<p className={styles.textAnApproach}>
							{elem.desc}
						</p>
						<Link className={styles.btnAnApproach} href={'/'}>Подробнее <Arrowss/></Link>
					</li>
				))}
			</ul>
			<div className={styles.linck}>
				<Link href={'/'} className={styles.btnRating}>Узнать больше</Link>
			</div>
		</div>
	)
}

export default AnApproach