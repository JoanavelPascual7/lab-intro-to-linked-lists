const { nums, words } = require("./data/data.js");

class Node { 
  constructor (data) {
      this.data = data
      this.next = null
  }
}


class LinkedList {
  constructor () {
      this.head = null
  }

  insert (data) {
      let newNode = new Node (data)
      if (!this.head) {
          this.head = newNode
      } else {
          newNode.next = this.head
          this.head = newNode
      }
  }

  getHeadData () {
      return this.head.data
  }


  get3rd (k) {
      let currentNode = this.head
      currentNode = currentNode.next
      currentNode = currentNode.next
      return currentNode.data
  }

  getkth (k) {
      let currentNode = this.head
      for (let i = 0; i < k; i++) {  
          if (currentNode.next) {
              currentNode = currentNode.next
          } else {
              return undefined
          }
      }
      return currentNode.data
  }


getLength () {
  let count = 0
  let currentNode = this.head
  while (currentNode) {
      count++
      currentNode = currentNode.next
  }
  return count
}

getKthFromLast (k) {
  return this.getKth(this.getLength() - k -1)
}
}

module.exports = {
  Node,
  LinkedList,
};
