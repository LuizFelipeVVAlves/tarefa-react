import logo from '../assets/logo.svg';
import styles from '../css/styles.module.css';


export default function Profile() {

    return (
        <div className={styles.profile_div}>
            <img src={logo} className={styles.profile_logo}></img>
            <p style={{fontSize: '25px'}}>Luiz Felipe Alves</p>
            <p>Dev Front-End</p>
        </div>
    )

}