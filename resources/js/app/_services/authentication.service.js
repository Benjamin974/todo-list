import { BehaviorSubject } from "rxjs";
import { Role } from '../_helpers/role';
import { requestOptions } from "../_helpers/request-options";
import { handleResponse } from "../_helpers/handle-response";


const currentUserSubject = new BehaviorSubject(
    JSON.parse(localStorage.getItem('currentUser'))
);

export const authenticationService = {
    connected,
    login,
    logout,
    isAdmin,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value;
    }
};

function connected() {
    const user = localStorage.getItem("currentUser");
    return !_.isNull(user)
}

function login(user) {
    return fetch(
        `/api/login`,
        requestOptions.post(user)
    )
        .then(handleResponse)
        .then(data => {
            if (data.message == undefined) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("currentUser", JSON.stringify(data.data));
                currentUserSubject.next(data.data);
                return data.data;


            } else {
                return data.message;
            }
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    currentUserSubject.next(null);
}

function isAdmin() {
    return role() === Role.Admin;
}

function role() {
    let user = localStorage.getItem('currentUser');
    if (!user) {
        return null;
    }
    user = JSON.parse(user);
    return user.role.name;
}