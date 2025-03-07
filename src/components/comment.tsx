import logo from '../assets/logo.svg';
import lixeira from '../assets/delete.svg';
import styles from '../css/styles.module.css';
import { useContext, useState } from 'react';
import { CommentsContext } from '../contexts/CommentsContext';

interface commentProps {
    id: number,
    name: string,
    text: string,
    key: number,

}

export default function Comment({id, name, text}: commentProps) {
    
    var [counter, setCounter] = useState<number>(0);
    var [liked, setLiked] = useState<boolean>(false);
    
    const commentsContext = useContext(CommentsContext);
    
    const { comments, setComments } = commentsContext;

    function handleDeleteClick() {
        if (comments) {
            if (setComments) {
                setComments(comments.filter((comment) => comment.props.id !== id));
            }
        }
    }
    
    return (
    <div style={{marginTop: '40px'}}>
       <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
        
            <div>
                <img src={logo} className={styles.comment_logo} />
            </div>
            
            <div className={styles.comment_text}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                        <p>{name}</p>
                        <p style={{color: '#999999', translate: '0 -10px'}}>publicado a 0 horas</p>
                    </div>
                    <div>
                        <input type="image" src={lixeira} style={{width: '40px', height: '40px'}} onClick={handleDeleteClick}/>
                    </div>
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </div>
        
       </div>
       <div style={{marginLeft: '70px', marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
       <svg onClick={() => {
            if (liked) {
                setLiked(liked => !liked);
                setCounter(counter => counter - 1);
            } else {
                setLiked(liked => !liked);
                setCounter(counter => counter + 1);
            }
       }}
        fill={liked ? '#007DFA' : '#8D8D99'} 
        height="30px" 
        width="30px" 
        version="1.1" 
        id="Capa_1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 490.2 490.2" 
        xmlSpace="preserve"
        stroke="#007DFA">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <g> 
                <path d="M490.1,234.464c0-37.6-30.6-68.3-68.3-68.3H316.2v-76.1c0-32.2-9.4-55.4-28-69c-29.4-21.6-69.8-9.3-71.5-8.7 c-5.1,1.6-8.6,6.3-8.6,11.7v85.5c0,67.3-78.1,90.2-81.4,91.2c-1,0.3-1.9,0.6-2.7,1.1c-5.8-11.6-17.8-19.6-31.6-19.6H35.2 c-19.4,0-35.2,15.8-35.2,35.2v207.9c0,19.4,15.8,35.2,35.2,35.2h33.1c6.8,0,12.3-5.5,12.3-12.3s-5.6-12.2-12.3-12.2H35.2 c-5.9,0-10.7-4.8-10.7-10.7v-207.9c0-5.9,4.8-10.7,10.7-10.7h57.3c5.9,0,10.7,4.8,10.7,10.7v196.1c0,37.6,30.6,68.3,68.3,68.3 h209.2c46.4,0,75.9-24.3,81.1-66.3l28.2-177c0.1-0.6,0.2-1.3,0.2-1.9v-2.2H490.1z M465.6,235.564l-28.1,176.5 c-3.7,30-22.8,45.3-56.8,45.3h-7.8H171.5c-24.1,0-43.8-19.6-43.8-43.8v-189.1c1.8,0.4,3.7,0.3,5.6-0.2 c4.1-1.1,99.3-28.7,99.3-114.8v-75.6c10.4-1.6,28.2-2.5,41.1,6.9c11.9,8.8,18,25.3,18,49.3v88.4c0,6.8,5.5,12.3,12.3,12.3h117.9 c24.1,0,43.8,19.6,43.8,43.8v1H465.6z"></path> 
            </g> </g></svg>
            <p className={liked ? styles.liked_text : styles.not_liked_text}>Like • {counter}</p>
       </div>
    </div>
    )

}