import { observable, action } from 'mobx';

export class LoadingStore {
  @observable obsToggleLoading:boolean = true;
  @observable obsToggleModalUnlock:boolean = false;

  @action actToggleLoading = (val:boolean) => {
    this.obsToggleLoading = val;
  }

  @action actToggleModalUnlock = (val:boolean) => {
    this.obsToggleModalUnlock = val;
  }
}