import styles from './Card.module.css';

export const Card = () => {
    return (
        <article className={styles.container}>
            <div>
                <img className={styles.img} src="/src/assets/image-qr-code.png" alt="QR" />
            </div>
            <section className={styles.body}>
                <header className={styles.header}>
                    <h2 className={styles.title}>{`Improve your front-end skills by building projects`}</h2>
                </header>
                <p>{`Scan the QR code to visit Frontend Mentor and take your coding skills to the next level`}</p>
            </section>
        </article>
    )
};
