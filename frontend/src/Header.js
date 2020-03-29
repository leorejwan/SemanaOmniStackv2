import React from 'react';

function Header(props) { //passa as propriedades que vem junto com a tag com esse nome.
    return (
        <header>
            <h1>ESSE É O TEXTO NORMAL</h1>
            <h1>{props.title}</h1>
            <h1>{props.children}</h1>
        </header> 
    );
}

export default Header;