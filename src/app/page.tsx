import React from 'react'
import Welcome from '@/components/Welcome/Welcome'
import NumberK from '@/components/NumberK/NumberK'
import About from '@/components/About/About'
import Services from '@/components/Services/Services'
import AnApproach from '@/components/AnApproach/AnApproach'
import TheJoinUs from '@/components/theJoinUs/TheJoinUs'
import Layout from "@/components/layout/Layout";
import styles from './styles/Home/Home.module.scss'
import People from "@/components/People/People";
import Aplication from "@/components/Aplication/Aplication";

const Home = () => {
	return (
		<>
			<Layout>
				<section className={styles.wrapperWelcome}>
					<Welcome/>
			</section>
				<section className={styles.NumberK}>
					<NumberK/>
			</section>
				<section className={styles.wrapperAbout}>
					<About/>
			</section>
				<section className={styles.wrapperServices}>
					<Services/>
			</section>
				<section className={styles.wrapperAnApproach}>
					<AnApproach/>
			</section>
			<section className={styles.wrapperJoinUs}>
				<TheJoinUs />
			</section>
				<section className={styles.wrapperPeople}>
					<People/>
				</section>
				<section className={styles.Aplication}>
					<Aplication />
				</section>
			</Layout>
		</>
	)
}

export default Home