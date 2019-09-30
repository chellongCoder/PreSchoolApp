import { LoadingStore } from './loading.store';

export function createStores() {
    const loadingStore = new LoadingStore();

    return {
        loadingStore
    };
}
