// MensagemAlerta.js
import React from 'react';

const MensagemAlerta = ({ mensagem }) => {
    if (!mensagem) return null;

    return (
        <div style={{ color: 'orange', margin: '10px 0', fontWeight: 'bold' }}>
            {mensagem}
        </div>
    );
};

export default MensagemAlerta;
