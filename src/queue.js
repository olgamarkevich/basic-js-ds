const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }
    return new ListNode(cur);
  }, null);
}

class Queue {
  constructor() {
    this.arr = [];
    this.curr = null;
  }

  getUnderlyingList() {
    return convertArrayToList(this.arr);
  }

  enqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    this.curr = this.arr[0];
    this.arr = this.arr.slice(1);
    return this.curr;
  }
}

module.exports = {
  Queue,
};
