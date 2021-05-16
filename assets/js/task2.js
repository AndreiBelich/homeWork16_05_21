"use strict";

const tableBody = document.querySelector(".main-table > tbody");
tableBody.append(createRow("Peter", "peter@gmail.com"));
tableBody.append(createRow("Alex", "alex@gmail.com"));

const mainForm = document.querySelector(".add-form");
const {userName, userEmail, addButton} = mainForm.elements;

mainForm.addEventListener("submit", (event)=> {
  event.preventDefault();
  const name = userName.value.trim();
  const email = userEmail.value.trim();
  if(!name || !email){
    return;
  }
  tableBody.append(createRow(name, email));
  mainForm.reset();
});


/*Creations start*/
function createRow(name, email){
  return createElement("tr", {
      classNames: ["table-row"]
    },
    createElement("td", {
      classNames: []
    },
      createInput(name)
    ),
    createElement("td", {
      classNames: []
    },
      createInput(email)
    ),
    createElement("td", {
      classNames: []
    },
      createDeleteButton()
    )
  );
}

function createDeleteButton(){
  return createElement("button", {
    classNames: ["delete-button"],
    handlers: {
      click: ({target}) => target.closest("tr").remove()
    }
  },
    document.createTextNode("Delete")
  );
}

function createInput(startValue){
  return createElement("input", {
    classNames: ["input"],
    attributes: {
      value: startValue || ""
    },
    handlers: {
      focus: focusHandler,
      keyup: keyupHandler
    }
  });
}
/*Creations finish*/

/*Handlers start*/
function focusHandler({target}){
  target.classList.add("input-in-focus");
}

function keyupHandler({target, code}){
  if(code.toLowerCase() === "enter"){
    target.classList.remove("input-in-focus");
    target.blur();
  }
}
/*Handlers finish*/
