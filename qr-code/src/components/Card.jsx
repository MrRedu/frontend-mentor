import styles from './Card.module.css';

export const Card = ({ srcImage, altImage, title, paragraph }) => {
    return (
        <article className={styles.container}>
            <div>
                <img className={styles.img} src={srcImage} alt={altImage} />
            </div>
            <section className={styles.body}>
                <header className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                </header>
                <p>{paragraph}</p>
            </section>
        </article>
    )
};
