import {useEffect} from 'react';
import useAuthContext from '../../hooks/useAuthContext';

function Logout() {
    const {logout} = useAuthContext();
    useEffect(() => logout());
    return null;
}

export default Logout;