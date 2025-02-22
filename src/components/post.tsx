import logo from '../assets/logo.svg';
import styles from '../css/styles.module.css';

export default function Post() {

    return (
        <div id='div_post' className={styles.post_div}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
            
                <img src={logo} className={styles.post_logo}></img>
                <div style={{display: 'flex', flexDirection: 'column', translate: '2rem'}}>
                    <p style={{fontSize: '24px'}}>Nome da pessoa</p>
                    <p style={{color: '#999999'}}>Profissão</p>
                </div>
                <p style={{translate: '60rem'}}>tempo da publicação</p>
            </div>
            <br />
            <br />
            <br />
            <div id='div_text'>
                <p>
                    Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet.

                    Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!
                </p>
            </div>
            <div>
                <p>comments</p>
            </div>
            <div id='div_feedback' style={{}}>   
                <p>Deixe seu feedback</p>
                <input type="text" name="" id="" />
            </div>
        </div>
    )

}