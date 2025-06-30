import styles from './styles.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="#">Entenda como funciona a técnica Pomodoro</a>
            <a href="#">25x5 Pomodoro &copy; {new Date().getFullYear()} - Heitor Hayashi</a>
        </footer>
    );
}   