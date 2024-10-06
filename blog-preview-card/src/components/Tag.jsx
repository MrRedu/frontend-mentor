import styles from './Tag.module.css'
export const Tag = ({ children }) => {
    return (
        <div className={styles.container}>
            <span>{children}</span>
        </div>
    )
};
