import React, {useState} from 'react';
import {MAGIC_WORD} from '../../consts/magic_word';
import useAuthContext from '../../hooks/useAuthContext';

function Login() {
    const {login} = useAuthContext();
    const [magicWord, setMagicWord] = useState('');

    function handleInputChange(e) {
        setMagicWord(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        
        if(magicWord === MAGIC_WORD) {
            //doLogin
            login()
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <br/>
                <input type="text" value={magicWord} onChange={handleInputChange} />
                <br/><br/>
                <button type='submit'>Iniciar Sesión</button>
            </form>
        </div>
    )
}

export default Login;