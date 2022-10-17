const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootN = null;
  }

  root() {
    return this.rootN;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootN) {
      this.rootN = newNode;
      return;
    }

    let currentNode = this.rootN;

    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }

        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let dataNode = this.rootN;

    while (dataNode) {
      if (dataNode.data === data) {
        return true;
      }
      if (dataNode.data > data) {
        dataNode = dataNode.left;
      } else {
        dataNode = dataNode.right;
      }
    }
    return false;
  }

  find(data) {
    let dataNode = this.rootN;

    while (data !== dataNode.data) {
      if (data < dataNode.data) {
        dataNode = dataNode.left;
      } else {
        dataNode = dataNode.right;
      }

      if (dataNode === null) return null;
    }
    return dataNode;
  }

  remove(data) {}

  min() {
    if (!this.rootN) return null;
    else {
      let minNode = this.rootN;
      while (minNode.left !== null) {
        if (minNode) {
          minNode = minNode.left;
        }
      }
      return minNode.data;
    }
  }

  max() {
    if (!this.rootN) return null;
    else {
      let maxNode = this.rootN;
      while (maxNode.right !== null) {
        if (maxNode) {
          maxNode = maxNode.right;
        }
      }
      return maxNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
