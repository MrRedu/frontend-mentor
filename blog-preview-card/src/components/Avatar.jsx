import styles from './Avatar.module.css'
export const Avatar = ({ srcImage, altImage, name }) => {
    return (
        <div className={styles.container}>
            <img src={srcImage} alt={altImage} />
            <span>{name}</span>
        </div>
    )
};
