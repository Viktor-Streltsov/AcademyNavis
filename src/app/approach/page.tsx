import React from 'react';
import { Metadata } from 'next'
import OurApproach from "@/components/ourApproach/OurApproach";
import styles from '../styles/directions/Directions.module.scss'
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
	title: 'Directions | Next App'
}


const PageDirections = () => {
	return (
		<Layout>
		<div className={styles.wrapperDirections}>
			<OurApproach/>
		</div>
		</Layout>
	);
};

export default PageDirections;
