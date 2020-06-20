// Init class
class Observable {
 
 // Each instance of the observers, included later as items of an array
 // this instaces will react to a change of state
 constructor() {
  this.observers = []
 }

 // Add an Object / DOM elment to the array of instances
 subscribe(f) {
  this.observers.push(f)
 }
 
 // Remove the Object / Dom element of the array of instances
 unsubscribe(f) {
  this.observers = this.observers.filter(subscriber => subscriber !== f)
 }
 
 notify(data) {
  this.observers.forEach(observer => observer(data))
 }
}

// References to DOM elements
const textInput = document.querySelector('.js-input')
const p1 = document.querySelector('.js-p1')
const p2 = document.querySelector('.js-p2')
const p3 = document.querySelector('.js-p3')

const subscribeP1 = document.querySelector('.js-subscribe-p1')
const subscribeP2 = document.querySelector('.js-subscribe-p2')
const subscribeP3 = document.querySelector('.js-subscribe-p3')

const unsubscribeP1 = document.querySelector('.js-unsubscribe-p1')
const unsubscribeP2 = document.querySelector('.js-unsubscribe-p2')
const unsubscribeP3 = document.querySelector('.js-unsubscribe-p3')

// Some actions to add to the instances of observers
const updateP1 = text => p1.textContent = text
const updateP2 = text => p2.textContent = text
const updateP3 = text => p3.textContent = text

// Instance a new class of observers
const headingsObserver = new Observable()

// add instances to the constructor with the actions of selected elements (will be updated later on trought notifications)
headingsObserver.subscribe(updateP1)
headingsObserver.subscribe(updateP2)
headingsObserver.subscribe(updateP3)

// subscribe the p elements with the actions
subscribeP1.addEventListener('click', () => headingsObserver.subscribe(updateP1))
subscribeP2.addEventListener('click', () => headingsObserver.subscribe(updateP2))
subscribeP3.addEventListener('click', () => headingsObserver.subscribe(updateP3))

// unsubscribe the p elements with the actions
unsubscribeP1.addEventListener('click', () => headingsObserver.unsubscribe(updateP1))
unsubscribeP2.addEventListener('click', () => headingsObserver.unsubscribe(updateP2))
unsubscribeP3.addEventListener('click', () => headingsObserver.unsubscribe(updateP3))

// Notifying all observers about the new data based on the selected events
textInput.addEventListener('keyup', e => {
  headingsObserver.notify(e.target.value)
})