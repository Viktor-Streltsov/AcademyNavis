import React from "react";

import styles from './TheFooter.module.scss'
import Phone from "@/components/theFooter/icons/phone";
import Locate from "@/components/theFooter/icons/locate";
import Message from "@/components/theFooter/icons/message";
import FacebookIcons from "@/components/theFooter/icons/FacebookIcons";
import InstagramIcon from "@/components/theFooter/icons/InstagramIcon";
import TwitterIcon from "@/components/theFooter/icons/TwitterIcon";

const TheFooter = () => {

	return (
		<footer className={styles.footer}>
			<div className={styles.componentFooter}>
				<div className={styles.infoBlock}>
					<div className={styles.warning}>Если у вас есть вопросы или вы хотите узнать больше о наших услугах, свяжитесь с нами:</div>
					<ul className={styles.textInfo}>
						<li className={styles.name}>Get In Touch</li>
						<li className={styles.textInfoFooter}><Phone/> Телефон: +123 456 7890</li>
						<li className={styles.textInfoFooter}><Locate/> Адрес: г. Бишкек, ул. Исанова, д. 25</li>
						<li className={styles.textInfoFooter}><Message/> Email: info@navisacademy.com</li>
					</ul>
				</div>
				<div className={styles.blockImages}>
					<ul className={styles.imgas}>
						<li><FacebookIcons/></li>
						<li><InstagramIcon/></li>
						<li><TwitterIcon/></li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export { TheFooter }
