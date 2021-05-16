"use strict";

const accordion = document.querySelector(".accordion");
let currentElement = null;
let previousElement = null;
const DEFAULT_CONTENT_CLASS_NAME = "content";

accordion.addEventListener("click", ({target}) => {
  try{
    currentElement = checkClassName(target, DEFAULT_CONTENT_CLASS_NAME);
  }catch(error){
    console.error(error);
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
});

function checkClassName(element, className){
  if(element.classList.contains(className)){
    return element;
  }
  const result = element.querySelector(`.${className}`);
  if(!result){
    throw new Error(`Can't find element with className = ${className}`);
  }
  return result;
}