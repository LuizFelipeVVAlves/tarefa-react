import React, { useState, JSX, useRef } from 'react';
import logo from '../assets/logo.svg';
import styles from '../css/styles.module.css';
import Comment from './comment';
import { CommentsContext } from '../contexts/CommentsContext';

interface PostProps {
    name: string;
    profession: string;
    time: string;
}



var id = 0

export default function Post(props: PostProps) {
    
    var [comments, setComments] = useState<JSX.Element[]>([]);
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    function handlePostClick() {
       
        if(textAreaRef?.current == null)
            return;

        if(textAreaRef.current.value == ''){
            alert("É necessário adicionar uma mensagem")
            return;
        }


        
        id++
        var newCom = React.createElement(Comment, {
            id: id,
            name: 'Pedro',
            text: textAreaRef?.current?.value,
            key: id,
        })
    
        setComments([...comments, newCom])
        
          
    }

    return (
        <div id='div_post' className={styles.post_div}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                <img src={logo} className={styles.post_logo}></img>
                <div style={{display: 'flex', flexDirection: 'column', translate: '2rem'}}>
                    <div><p style={{fontSize: '24px'}}>{props.name}</p></div>
                    <div><p style={{color: '#999999', translate: '0 -25px'}}>{props.profession}</p></div>
                </div>
                <p style={{translate: '60rem'}}>{props.time}</p>
            </div>
            <div id='div_text'>
                <p>
                    Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet.

                    Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!
                </p>
            </div>
            <br />
            <br />
            <div id='div_feedback' style={{display: 'flex', flexDirection: 'column'}}>   
                <p>Deixe seu feedback</p>
                <br />
                <textarea ref={textAreaRef} placeholder='Escreva um comentário...' rows={7} cols={50} className={styles.input} style={{padding: "20px 20px 20px 20px"}}></textarea>
                <br />
                <button className={styles.comment_button} onClick={handlePostClick}>Comentar</button>
            </div>
            <div id='div_comment' style={{marginTop: '40px'}}> 
            <CommentsContext.Provider value={{comments, setComments}}>
                {comments}
            </CommentsContext.Provider>
                
            </div>
        </div>
    )
}