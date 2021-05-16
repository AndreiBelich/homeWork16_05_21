"use strict";

const accordion = document.querySelector(".accordion");
let currentElement = null;
let previousElement = null;
const DEFAULT_CONTENT_CLASS_NAME = "content";

accordion.addEventListener("click", clickHandler);


function clickHandler(event){
  currentElement = event.target.querySelector(`.${DEFAULT_CONTENT_CLASS_NAME}`);
  if(!currentElement){
    return;
  }
  if(currentElement && previousElement){
    if(currentElement === previousElement){
      previousElement.classList.add("hidden");
      previousElement = null;
      currentElement = null;
      return;
    }
  }
  if(previousElement){
    previousElement.classList.add("hidden");
  }
  currentElement.classList.remove("hidden");
  previousElement = currentElement;
}