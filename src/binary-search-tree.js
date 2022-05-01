const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.addNode(this.rootNode, newNode);
    }
  }
  search(Nod, data) {
    if (Nod === null) return false;
    if (Nod.data === undefined) return false;
    if (Nod.data === data) return true;

    if (data < Nod.data) {
      return this.search(Nod.left, data);
    }
    if (data > Nod.data) {
      return this.search(Nod.right, data);
    }
  }
  has(data) {
    return this.search(this.rootNode, data);
  }

  find(data) {
    var nod = this.rootNode;
    while (nod !== null) {
      if (nod.data === data) {
        return nod;
      } else if (data < nod.data) {
        nod = nod.left;
      } else {
        nod = nod.right;
      }
    }
    return null;
  }

  remove(data) {
    this.removeNod(this.rootNode, data);
  }

  removeNod(node, data) {
    if (node === null) return null;
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      let minNode = ((root) => {
        while (root.left !== null) {
          root = root.left;
        }
        return root;
      })(node.right);
      node.data = minNode.data;
      node.right = this.removeNod(node.right, minNode.data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNod(node.right, data);
      return node;
    } else {
      node.left = this.removeNod(node.left, data);
      return node;
    }
  }

  min() {
    if (this.rootNode === null) return false;

    let nod = this.rootNode;
    while (nod.left !== null) {
      nod = nod.left;
    }
    return nod.data;
  }

  max() {
    if (this.rootNode === null) return false;

    let nod = this.rootNode;
    while (nod.right !== null) {
      nod = nod.right;
    }
    return nod.data;
  }
}

module.exports = {
  BinarySearchTree,
};
