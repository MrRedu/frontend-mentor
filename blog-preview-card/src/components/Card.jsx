import { Avatar } from './Avatar';
import styles from './Card.module.css'
import { Tag } from './Tag';
export const Card = ({ srcImage, altImage, tags, title, paragraph }) => {
    return (
        <article className={styles.container}>
            <img src={srcImage} alt={altImage} />
            <div>
                <header className={styles.header}>
                    <div className={styles.tags}>
                        {tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </div>
                    <span className={styles.date}>{'Published 21 Dec 2023'}</span>
                    <h2 className={styles.title}>{title}</h2>
                </header>
                <p className={styles.paragraph}>{paragraph}</p>
            </div>
            <footer className={styles.footer}>
                <Avatar srcImage={'/image-avatar.webp'} altImage={'Avatar'} name={'Greg Hooper'} />
            </footer>
        </article>
    )
};
