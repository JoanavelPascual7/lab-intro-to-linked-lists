const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  clear() {
    this.head = null;
  }

  containsDuplicates() {
    const arr = this.toArray();
    const unique = [...new Set(arr)];
    return arr.length !== unique.length;
  }

  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  getFirst() {
    return this.head;
  }

  getKth(k) {
    let count = 1;
    let node = this.head;
    while (count !== k) {
      count++;
      node = node.next;
    }
  }

getKthToLast (k) {
  let getSize = this.size();
  let node = this.head;
  for (let i = 1; i < getSize - k; i++) {
    node = node.next;
  }
  return node;
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

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
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
        return null;
      }
    }

    return currentNode.data;
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

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

module.exports = {
  Node,
  LinkedList,
};
