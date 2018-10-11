export const SEND_INFORMATION = "SEND_INFORMATION";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const SEND_FIRST = "SEND_FIRST";
export const SEND_SECOND = "SEND_SECOND";
export const SEND_THIRD = "SEND_THIRD";

export const sendFirst = item => ({
    type: SEND_FIRST,
    item
})

export const sendSecond = item => ({
    type: SEND_SECOND,
    item
})

export const sendThird = item => ({
    type: SEND_THIRD,
    item
})


export const sendInformation = item => ({ 
    type: SEND_INFORMATION, 
    item 
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});