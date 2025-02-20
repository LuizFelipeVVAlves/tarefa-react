import logo from '../assets/logo.svg';
import styles from '../css/styles.module.css';

export default  function Header() {
    return (
        <header className={styles.header}>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                }}>

                <img src={logo} alt="logo" style={{marginRight: '30px'}}/>
                <h1 className={styles.feed}>Feed</h1>
            </div>
        </header>
    );
    }