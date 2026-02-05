const arr = [];
Array.prototype.events = new Map();
/**
 * 1. addListner
 * 2. pushWithEvent
 * 3. popWithEvent
 */

Array.prototype.addListner = function (eventName, eventHandler) {
  const eventsHandlers = this.events.get(eventName);
  if (!eventsHandlers?.length) {
    this.events.set(eventName, [eventHandler]);
  } else {
    this.events.set(eventName, [...eventsHandlers, eventHandler]);
  }
};
Array.prototype.pushWithEvent = function (eventName, items) {
  if (!eventName) throw new Error("Event name is required");
  if (!items) throw new Error("Items are required");

  this.push(items);
  const eventHandlers = this.events.get(eventName);
  if (eventHandlers?.length) {
    for (const eventHandler of eventHandlers) {
      eventHandler(eventName, items, this);
    }
  }
};

Array.prototype.popWithEvent = function (eventName) {
  if (!eventName) throw new Error("Event name is required");
  const eventHandlers = this.events.get(eventName);
  const popedItem = this.pop();
  if (eventHandlers?.length) {
    for (const eventHandler of eventHandlers) {
      eventHandler(eventName, popedItem, this);
    }
  }
};
arr.addListner("add", (eventName, item, array) => {
  console.log(item, "Item is added");
});
arr.addListner("add", (eventName, item, array) => {
  console.log(item, "Item is added again");
});
arr.addListner("remove", (eventName, item, array) => {
  console.log(item, "Item is removed");
});
arr.pushWithEvent("add", 6);
arr.popWithEvent("remove");
console.log(arr);
