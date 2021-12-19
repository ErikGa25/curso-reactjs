import React from 'react';
import {Link} from 'react-router-dom';
import {LOGOUT} from '../../config/router/paths';

function Private(props) {
    return(
        <div>
            <p>Esta ruta es privada.</p>
            <br/>
            <Link to={LOGOUT}>Cerrar Sesión</Link>
        </div>
    )
}

export default Private;