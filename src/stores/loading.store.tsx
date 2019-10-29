import { observable, action } from 'mobx';

export class LoadingStore {
  @observable obsToggleLoading:boolean = false;
  @observable obsToggleModalUnlock:boolean = false;

  @action actToggleLoading = (val:boolean) => {
    this.obsToggleLoading = val;
  }

  @action actToggleModalUnlock = (val:boolean) => {
    this.obsToggleModalUnlock = val;
  }
}