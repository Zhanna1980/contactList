/**
 * Created by zhannalibman on 06/02/2017.
 */
"use strict";

function Contact (name, telephoneNumber){
    if (!Contact.validateName(name)){
        throw Error("Invalid name");
    }
    this._name = name;
    this._telephoneNumber = telephoneNumber;
}

Contact.prototype.getContactName = function () {
    return this._name;
};

Contact.prototype.setContactName = function (name) {
    if (Contact.validateName(name)){
        this._name = name;
    }
};

Contact.prototype.getContactNumber = function () {
    return this._telephoneNumber;
};

Contact.prototype.setContactNumber = function (telephoneNumber) {
        this._telephoneNumber = telephoneNumber;
};

Contact.validateName = function (name) {
    return (name != undefined && typeof name == "string" && name.length > 0);
};




