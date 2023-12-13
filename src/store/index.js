import {makeAutoObservable} from "mobx";

class User {
    userId = '';
    user = {};

    constructor() {
        makeAutoObservable(this)
    }

    setUser(user) {
        this.user = user;
    }

    setUserId(id) {
        this.userId = id;
    }
}

const store = {
    user: new User()
};


export default store;
