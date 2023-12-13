import {makeAutoObservable} from "mobx";

class User {
    userId = 'uusiax121d';
    user = {};

    constructor() {
        makeAutoObservable(this);
        this.user = {};
    }

    setUser(user) {
        this.user = user;
    }


    setUserId(id) {
        this.userId = id;
    }
}

const store = {
    userStore: new User(),
};


export default store;
