import {toast} from 'react-toastify';

export const SuccessToast = (mes:string, obj?: any) => toast.success(mes, obj);
export const FailedToast = (mes:string) => toast.error(mes);