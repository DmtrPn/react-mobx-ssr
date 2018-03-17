import { observable, action } from 'mobx';

export class WishState {

    @observable
    public wishes: any[] = [];
    @observable
    public needUpdate: boolean;

    constructor(initialState?: any) {
        this.wishes = initialState && initialState.wishes ?
            initialState.wishes : [];
        // Preventing duplicate requests on the server and client
        this.needUpdate = initialState ? !initialState.fromServer : true;
    }

    @action
    public setNeedUpdate() {
        this.needUpdate = true;
    }

    @action
    public setWishes(wishes: any[]) {
        this.wishes = wishes;
    }
}
