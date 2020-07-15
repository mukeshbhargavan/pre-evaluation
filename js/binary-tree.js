/*
Given a binary tree, find the height of the binary tree. (Mandatory)
Input: Root node of the tree
Output: Height of the tree
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinartSearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMaxHeight(node = this.root) {
      if (node == null) {
          return 0;
      };
      let left = this.findMaxHeight(node.left);
      let right = this.findMaxHeight(node.right);

      if (left > right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }
}

const bst = new BinartSearchTree();

bst.insertNode(9);
bst.insertNode(4);
bst.insertNode(17);
bst.insertNode(3);
bst.insertNode(6);
bst.insertNode(22);
bst.insertNode(5);
bst.insertNode(7);
bst.insertNode(20);

document.getElementById('bts').innerHTML = bst.findMaxHeight();
