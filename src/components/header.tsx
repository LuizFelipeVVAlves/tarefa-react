import logo from '../assets/logo.svg';
import styles from '../css/styles.module.css';

export default  function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img src={logo} alt="logo" />
                <h1 className={styles.feed}>Feed</h1>
            </div>
        </header>
    );
    }