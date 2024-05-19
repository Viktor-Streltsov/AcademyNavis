import React from 'react';
import styles from './Aplication.module.scss';

const Aplication = () => {
    return (
        <div className={styles.wrapperAplication}>
            <h2 className={styles.nameAp}>Оставьте заявку</h2>
            <p className={styles.textAp}>Мы будем рады помочь вам найти наиболее подходящее решение для вашего бизнеса.</p>
            <form className={styles.formAp}>
                <input type={"email"} className={styles.input} placeholder={'Ваш email'}/>
                <button className={styles.submit}>Отправить</button>
            </form>
        </div>
    );
};

export default Aplication;