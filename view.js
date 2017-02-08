/**
 * Created by zhannalibman on 06/02/2017.
 */
"use strict";

(function ($) {
    var contactList = new List();

    createUI();

    function createUI() {
        var listDiv = $("#list");
        var btnAddContact = $("#btnAddContact");
        btnAddContact.click(getInputs);
        var contacts = contactList.getContacts();
        var list = $("<ul></ul>");
        for (var i = 0; i < contacts.length; i++){
            displayNewContact(contacts[i], i);
        }
        listDiv.append(list);
    }

    function getInputs(){
        var inputName = $("#name");
        var inputNumber = $("#number");
        var enteredName = inputName.val();
        var enteredNumber = inputNumber.val();
        if (enteredName.length > 0){
            addContactToList(enteredName, enteredNumber);
        }
        inputName.val("");
        inputNumber.val("");
    }
    function addContactToList(name, telephoneNumber){
        var newContact = contactList.addNewContact(name, telephoneNumber);
        if (newContact != null){
            displayNewContact(newContact, contactList.getContacts().length - 1);
        }
        else {
            alert("Invalid name or telephone number");
        }
    }

    function displayNewContact(contact, index) {
        var template = `<li>
                            <table>
                                <tr>
                                    <td class="nameField">name</td>
                                    <td class="numberField">number</td>
                                    <td class="btnDelete">Delete</td>
                                </tr>
                            </table>
                        </li>`;
        var listElement = $(template);
        listElement.attr("data-id", index);
        listElement.find(".nameField").text(contact.getContactName());
        listElement.find(".numberField").text(contact.getContactNumber());
        listElement.find(".btnDelete").click(deleteContact);
        $("ul").append(listElement);

    }

    function deleteContact() {
        var parentLi = $(this).parents("li");
        var index = parentLi.attr("data-id");
        contactList.deleteContactByIndex(index);
        parentLi.remove();
    }
})(jQuery);
