export const SEND_INFORMATION = "SEND_INFORMATION";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const sendInformation = item => ({ 
    type: SEND_INFORMATION, 
    item 
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});