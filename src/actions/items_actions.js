export const RECEIVE_INFORMATION = 'RECEIVE_INFORMATION';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveInformation = item => ({
    type: RECEIVE_INFORMATION,
    item
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});