import React, {useState} from 'react';
import './styles.css'
import AuthenticationApi from '../../js/authentication-api'
import { useHistory } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [classEmail, setClassEmail] = useState('input');
    const [classPass, setClassPass] = useState('input');
    const history = useHistory();

    const handleClick = () => {

        if(email==="" && pass===""){
            setClassPass('error') 
            setClassEmail('error')
        }else if(email===""){
            setClassEmail('error') 
        }else if(pass===""){
            setClassPass('error') 
        }else{
           AuthenticationApi.login(email, pass, (error, response) => {
            if(error){
               alert(error.message); 
            }else{
                console.log('utilizador autenticado');
                localStorage.setItem('loginToken', response.token);
                history.push('/')
            }
           })
         }
    }

    return(

        <main>
            <form class="signin__form" onSubmit={(event) => event.preventDefault()}>
                <div className="textBox">
                    <input onChange={(event) => setEmail(event.target.value)} value={email} className={classEmail} type="text" placeholder="Email"/>
                    <input onChange={(event) => setPass(event.target.value)} value={pass} className={classPass} type="password" placeholder="Password"/>
                </div>
                <button className='signin__button' onClick={() => handleClick()}>Sign In</button>
            </form>
        </main>
    )
}