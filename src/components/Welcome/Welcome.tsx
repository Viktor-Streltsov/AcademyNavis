import React from 'react'
import styles from './Welcome.module.scss'
import Img from "@/components/Welcome/icons/img";
import Link from "next/link";

const Welcome = () => {
    return (
        <>
            <div className={styles.infoWelcome}>
                <div className={styles.hello}>Welcome</div>
                <h1 className={styles.nameHeader}>Добро пожаловать <br/> на сайт ОсОО IT Academy «Navis»!</h1>
                <p className={styles.textFuture}>
                    Наша цель - предоставлять инновационные и надежные решения, которые соответствуют самым высоким
                    стандартам качества.
                </p>
                <div className={styles.btnBlock}>
                    <Link href='/' className={styles.btnNow}>Get Quote Now</Link>
                    <Link href='/' className={styles.btnMore}>Learn More</Link>
                </div>
            </div>
            <div>
                <Img/>
            </div>
        </>
    )
}

export default Welcome