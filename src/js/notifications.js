import { error, success } from '@pnotify/core/dist/PNotify.js';
//import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


function successNotice() {
    const statusSuccess = success({
        text: 'Success',
        delay: 500,
        
    });
    return statusSuccess;
}

// function infoNotice() {
//     const statusInfo = info({
//         text: 'Sorry! Can`t find any matches! Please specify your request',
        
//     });
//     return statusInfo;
// }

function errorNotice() {
    const statusError = error({
        text: 'Unfortunatly can`t find any matches! Please specify your request',
        delay: 2000,
        
    });
    return statusError;
}

export { successNotice, errorNotice};
    
