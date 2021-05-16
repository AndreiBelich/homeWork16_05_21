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


/*Второй вариант. Отличатеся тем, что закрывает блок если кликнуть по контенту внутри него.
  Для демонстрации нужно раскоментировать данный код и подставить функцию clickHandlerV2 в 8 строку, вместо clickHandler
* */
/*
function clickHandlerV2({target}){
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
}

function checkClassName(element, className){
  if(!element || element === accordion){
    throw new TypeError(`Can't find element ${element}`);
  }
  if(element.classList.contains(className)){
    return element;
  }
  
  const result = element.querySelector(`.${className}`) || checkClassName(element.parentElement, className);
  if(!result){
    throw new Error(`Can't find element with className = ${className}`);
  }
  return result;
}*/