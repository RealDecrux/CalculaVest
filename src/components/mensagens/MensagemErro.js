import React from 'react';
import PropTypes from 'prop-types';

const MensagemErro = ({ mensagem }) => {
  return (
    <div style={{ 
      color: 'red', 
      backgroundColor: '#fdd', 
      border: '1px solid red', 
      padding: '5px', 
      borderRadius: '5px', 
      margin: '10px 0' 
    }}>
      {mensagem}
    </div>
  );
};

MensagemErro.propTypes = {
  mensagem: PropTypes.string.isRequired,
};

export default MensagemErro;
