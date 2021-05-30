/* eslint-disable no-console */
console.log('***** START');

const inOrderItems = ['D', 'B', 'E', 'A', 'F', 'C'];
const preOrderItems = ['A', 'B', 'D', 'E', 'C', 'F'];

/**
 * Builds a binary tree based on 2 arrays In-Order and Pre-Order
 * @param {Array<any>} IO Array with In-Order items
 * @param {Array<any>} PO Array with Pre-Order items
 * @param {number} poIndex Pre Order index
 * @returns {value, left, right} node
 */
const buildTree = (IO, PO) => {
  const poItem = PO[0];
  const ioIndex = IO.findIndex((item) => item === poItem);
  const node = { value: poItem };
  if (PO.length > 1) {
    if (ioIndex > 0 && ioIndex < PO.length) {
      node.left = buildTree(IO.slice(0, ioIndex), PO.slice(1, ioIndex + 1));
    }
    if (ioIndex < IO.length - 1) {
      node.right = buildTree(IO.slice(ioIndex + 1), PO.slice(ioIndex + 1));
    }
  }
  return node;
};

const root = buildTree(inOrderItems, preOrderItems);

console.log(root);
