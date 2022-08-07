//最基礎的 Node 結構，包含一個 value 以及一個 pointer
function Node(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
 }

let node1 = new Node(1); //宣告 node1 是一個 value 為 0 的 node
let node2 = new Node(2); //宣告 node2 是一個 value 為 1 的 node

console.log('nodel1 value:', node1.val);
// node1 value: 1

console.log('nodel2 value:', node2.val);
// node2 value: 2

console.log('nodel1 next:', node1.next);
// node1 next: null
// 因為還沒給 node1 指定 next 這個 pointer 要指給誰

node1.next = node2;
// 把 node1 的 next 指向 node2

console.log('node1 next:', node1.next);
// node1 next: Node { val: 2, next: null }
// node1 的 next 現在會指向 node 2;

console.log('node1 next value:', node1.next.val);
// node1 next value: 2
// 所以現在 node1 的 next 的 value == node2 的 value
