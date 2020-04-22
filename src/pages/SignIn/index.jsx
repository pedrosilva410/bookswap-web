import React, {useState} from 'react';
import './styles.css'
import AuthenticationApi from '../../js/authentication-api'



export default function SignIn() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleClick = () => {

        if(email.target.value==="" && pass.target.value===""){
            email.classList.add('error');
            pass.classList.add('error');
            alert("you have to fill the fields");
        }else if(email===""){
            email.classList.add('error')
            window.alert("you have to fill the field email");
        }else if(pass===""){
            pass.classList.add('error')
            alert("you have to fill the field password");
        }else{
           AuthenticationApi.login(email, pass, (error, response) => {
            if(error){
               alert(error.message); 
            }else{
                console.log('utilizador autenticado');
            }
           })
        }
    }

    return(
        <main>
            <form onSubmit={(event) => event.preventDefault()}>
                <div className="textBox">
                    <input onChange={(event) => setEmail(event.target.value)} value={email} className="input__text" type="text" placeholder="Email"/>
                    <input onChange={(event) => setPass(event.target.value)} value={pass} className="input__pass" type="password" placeholder="Password"/>
                </div>
                <button onClick={() => handleClick}>Sign In</button>
            </form>
        </main>
    )
}