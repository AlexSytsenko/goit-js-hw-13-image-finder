import { alert, error, notice, info, success, defaults } from '@pnotify/core/dist/PNotify.js';
//import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';



defaults.delay = 2000;




function successNotice() {
    const statusSuccess = success({
        text: 'Success',
        
    });
    return statusSuccess;
}

function infoNotice() {
    const statusInfo = info({
        text: 'Sorry! Can`t find any matches! Please specify your request',
        
    });
    return statusInfo;
}

// function errorNotice(err) {
//     const statusError = error({
//         text: err,
        
//     });
//     return statusError;
// }

export { successNotice, infoNotice, };
    
