const { nums, words } = require("./data/data.js");

class Node { 
  constructor (data) {
      this.data = data
      this.next = null
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  clear() {
    this.head = null;
  }

  containsDuplicates () {
    const arr = this.toArray();
    const unique = [...new Set(arr)];
    return arr.length !== unique.length;
  }

delete(data) {
  let node = this.head;
  let counter = 0;
  while (node.data !== data && node.next) {
    counter++;
    node = node.next;
  }
  let foundNode = node;
  node = this.head;
  for (let i = 1; i < counter; i++) {
    node = node.next;
  }
  node.next = foundNode.next;
}

getFirst() {
  return this.head;
}

  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  isEmpty() {
    return !this.head;
  }

  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  getHeadData() {
    return this.head ? this.head.data : null;
  }

  get3rd() {
    let currentNode = this.head;
    if (!currentNode) return null;

    for (let i = 0; i < 2; i++) {
      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        return null; // Return null for non-existent 3rd element
      }
    }

    return currentNode.data;
  }

  getKth(k) {
    let currentNode = this.head;
    for (let i = 0; i < k; i++) {
      if (currentNode && currentNode.next) {
        currentNode = currentNode.next;
      } else {
        return null; // Return null if k is out of bounds
      }
    }
    return currentNode ? currentNode.data : null;
  }

  getLength() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  getKthFromLast(k) {
    if (k <= 0) return null; // Invalid value of k
    let size = this.getLength();
    if (k > size) return null; // k is out of bounds
    let node = this.head;
    for (let i = 0; i < size - k; i++) {
      node = node.next;
    }
    return node ? node.data : null;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++; 
      node = node.next;
    }
    return count;
  }
  
}



module.exports = {
  Node,
  LinkedList,
};
