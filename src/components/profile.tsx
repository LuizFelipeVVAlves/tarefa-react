import profile from '../assets/profile.jpg';
import styles from '../css/styles.module.css';
import image from '../assets/image.png';

export default function Profile() {

    return (
        <div className={styles.profile_div}>
            
            <div className={styles.background_image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.profile_info_div}>
                <img src={profile} className={styles.profile_logo}></img>
                <p style={{fontSize: '30px'}}>Luiz Felipe Alves</p>
                <p style={{color: '#999999', translate: '50px -20px'}}>Dev Front-End</p>
            </div>
            
            

        </div>
    )

}