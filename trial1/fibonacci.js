function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);

    }   
    console.log(fibonacci(10));
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class avlTree {
    root = null;
    constructor() {
        this.root = null;
    }
    add(value) {
        this.root = this.addHelper(this.root, value);
    } 
    addHelper(root, value) {
        if (root == null) {
            return new TreeNode(value);
        }
        if (value < root.value) {
            root.left = this.addHelper(root.left, value);
        } else {
            root.right = this.addHelper(root.right, value);
        }
        return root;
    }
        
}