'use client'

import Navigation from './navigation/Navigation'
import Link from 'next/link'
import Logo from '../icons/Logo'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import styles from './TheHeader.module.scss'
import ArrowRight from "@/app/icons/ArrowRight";

export const navItems = [
	{ label: 'О нас', href: '/' },
	{ label: 'Наши услуги', href: '/' },
	{ label: 'Наш подход', href: '/' },
	{ label: 'Заявки', href: '/' }
]


const TheHeader = () => {
	const session = useSession()

	return (
		<header className={styles.wrapperHeader}>
			<div className={styles.menu}>
				<Link href={'/'} className={styles.logo}><Logo /></Link>
				<nav className={styles.navText}>
					<Navigation navLinks={navItems} />
				</nav>
				{
					session?.data ?
						<Link className={styles.login} href='#'
									onClick={() => signOut({ callbackUrl: '/' })}>Выйти</Link>
						:
						<>
							<Link className={styles.login} href='/signin'>Войти <ArrowRight/></Link>
						</>
				}
			</div>
		</header>
	)
}

export { TheHeader }
