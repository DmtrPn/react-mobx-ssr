import { observable, action } from 'mobx';

export class DreamState {

    @observable
    public dreams: any[] = [];
    @observable
    public needUpdate: boolean;

    constructor(initialState?: any) {
        this.dreams = initialState && initialState.dreams ?
            initialState.dreams : [];
        // Preventing duplicate requests on the server and client
        this.needUpdate = initialState ? !initialState.fromServer : true;
    }

    @action
    public setNeedUpdate() {
        this.needUpdate = true;
    }

    @action
    public setDreams(dreams: any[]) {
        this.dreams = dreams;
    }
}
