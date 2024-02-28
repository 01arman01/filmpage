import React from 'react';
import s from './ErrorMessage.module.css'
function ErrorMessage({message}) {
    return (
        <p  className={s.error}>
            <span>⛔⛔</span>
            {message}
        </p>
    );
}

export default ErrorMessage;