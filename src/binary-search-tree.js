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
      if (newNode.data > currentNode) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
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
    let findNode = this.rootN;
    while (data !== findNode.data) {
      if (data < findNode.data) {
        findNode = findNode.left;
      } else {
        findNode = findNode.right;
      }
      if (findNode === null) {
        return null;
      }
    }
    return findNode;
  }

  remove(data) {
    const ggRemove = function (Node, data) {
      if (Node === null) return null;
      if (data === Node.data) {
        if (Node.left === null && Node.right === null) {
          return null;
        }

        if (Node.left === null) {
          return Node.right;
        }

        if (Node.right === null) return Node.left;

        let curr = Node.right;

        while (curr.left !== null) {
          curr = curr.left;
        }
        Node.data = curr.data;
        Node.right = ggRemove(Node.right, data);
        return Node;
      } else if (data > Node.data) {
        Node.left = ggRemove(Node.left, data);
        return Node;
      } else {
        Node.right == ggRemove(Node.right, data);
        return Node;
      }
    };
    this.rootN = ggRemove(this.rootN, data);
  }

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
      let minNode = this.rootN;
      while (minNode.right !== null) {
        if (minNode) {
          minNode = minNode.right;
        }
      }
      return minNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
