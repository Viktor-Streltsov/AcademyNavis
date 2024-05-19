'use client'

import React, {useEffect, useState} from 'react';
import img1 from './icons/img1.png';
import img2 from './icons/img2.png';
import img3 from './icons/img3.png';
import img4 from './icons/img4.png';
import styles from './OurApproach.module.scss'
import Image from "next/image";

const OurApproach = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/direction/');
            if (!response.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const jsonData = await response.json();
            setData(jsonData.rows);
        };

        fetchData();
    }, []);

    return (
        <div className={styles.contentDerections}>
            <div className={styles.blockHeader}>
                <div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.name}>Индивидуальный Подход</h2>
                    <p className={styles.text}>
                        В ОсОО IT Academy «Navis» мы понимаем, что каждая компания уникальна, и именно поэтому мы
                        уделяем
                        особое внимание индивидуальному подходу к каждому клиенту. Наши специалисты внимательно изучают
                        ваши
                        потребности и бизнес-процессы, чтобы предложить решения, которые максимально соответствуют вашим
                        целям и задачам.
                    </p>
                </div>
            </div>
            <ul className={styles.blockList}>
                <li className={styles.blockServis}>
                    <div className={styles.blockText}>
                        <h2 className={styles.nameList}>Анализ потребностей:</h2>
                        <p className={styles.textList}>
                            Мы проводим детальный анализ ваших бизнес-процессов и определяем ключевые области, которые
                            требуют улучшения.
                        </p>
                    </div>
                    <div className={styles.blockImages}>
                        <Image src={img1} width={386} height={520}/>
                    </div>
                </li>
                <li className={styles.blockServis}>
                    <div className={styles.blockImages}>
                        <Image src={img2} width={386} height={520}/>
                    </div>
                    <div className={styles.blockText}>
                        <h2 className={styles.nameList}>Персонализированные решения:</h2>
                        <p className={styles.textList}>
                            Разработка решений, полностью адаптированных под специфику вашего бизнеса
                        </p>
                    </div>
                </li>
                <li className={styles.blockServis}>
                    <div className={styles.blockText}>
                        <h2 className={styles.nameList}>Тесное взаимодействие:</h2>
                        <p className={styles.textList}>
                            Мы работаем в тесном сотрудничестве с вашими сотрудниками на всех этапах проекта, чтобы
                            обеспечить максимальную эффективность и результативность.
                        </p>
                    </div>
                    <div className={styles.blockImages}>
                        <Image src={img3} width={386} height={520}/>
                    </div>
                </li>
                <li className={styles.blockServis}>
                    <div className={styles.blockImages}>
                        <Image src={img4} width={386} height={520}/>
                    </div>
                    <div className={styles.blockText}>
                        <h2 className={styles.nameList}>Поддержка и сопровождение:</h2>
                        <p className={styles.textList}>
                            Предоставляем всестороннюю поддержку и обучение, чтобы вы могли максимально эффективно
                            использовать разработанные системы.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default OurApproach;