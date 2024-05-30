import { action, makeAutoObservable, makeObservable, observable } from "mobx";

export default class ActivityStore {
    title = 'hello from MobX';

    constructor() {
        // makeObservable(this, {
        //     title: observable,
        //     setTitle: action
        // });
        makeAutoObservable(this);
    }

    // if this setTitle is an arrow function the it binds directly to the class ActivityStore
    // if this setTitle is a normal function the inside makeObservable should be setTitle: action.bound
    setTitle = () => {
        this.title = this.title + '!';
    }
}