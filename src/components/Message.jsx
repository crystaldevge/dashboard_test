import React from 'react';
const Message = ({ message, type }) => {
    const getClassByType = (type) => {
        switch (type) {
            case 'success':
                return 'message-box success';
            case 'error':
                return 'message-box error';
            case 'info':
                return 'message-box info';
            default:
                return 'message-box';
        }
    };
    // Add styles for the message box
    const messageBoxStyle = {
        padding: '10px',
        borderRadius: '5px',
        margin: '10px 0',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
    };

    const stylesByType = {
        success: { backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb' },
        error: { backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb' },
        info: { backgroundColor: '#d1ecf1', color: '#0c5460', border: '1px solid #bee5eb' },
    };

    const combinedStyle = { ...messageBoxStyle, ...(stylesByType[type] || {}) };
    return (
        <div className={getClassByType(type)} style={combinedStyle}>
            {message}
        </div>
    );
};

export default Message;