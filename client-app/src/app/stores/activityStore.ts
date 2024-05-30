import { makeObservable, observable } from "mobx";

export default class ActivityStore {
    title = 'hello from MobX';

    constructor() {
        makeObservable(this, {
            title: observable
        });
    }
}