import { LoadingStore } from './loading.store';
import { MommentStore } from './moment.store';
import {NotificationStore} from './notification.store';
import {StudentStore} from './student.store';
import {UserStore} from './user.store';
import ClassStore from './class.store';

export function createStores() {
    const loadingStore = new LoadingStore();
    const momentStore = new MommentStore();
    const notificationStore = new NotificationStore();
    const studentStore = new StudentStore();
    const userStore = new UserStore();
    const classStore = new ClassStore();

    return {
        loadingStore,
        momentStore,
        notificationStore,
        studentStore,
        userStore,
        classStore
    };
}
