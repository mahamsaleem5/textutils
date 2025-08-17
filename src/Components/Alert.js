import React from 'react';

function Alert(props) {
  const capitalize = (word = "") => {
    const lower = word.toString().toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
          role="alert"
          style={{
            backgroundColor: props.mode === 'dark' && props.alert.type.toLowerCase() === 'success'
              ? '#198754' // Bootstrap success green
              : '',
            color: props.mode === 'dark' ? 'white' : ''
          }}
        >
          <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
