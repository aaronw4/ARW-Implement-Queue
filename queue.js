/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
    return null
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.stack2 = []
    for (i = this.stack1.length - 1; i > -1; i--) {
        this.stack2.push(this.stack1[i])
    }
    
    let number = this.stack2.pop()

    this.stack1 = []
    for (i = this.stack2.length - 1; i > -1; i--) {
        this.stack1.push(this.stack2[i])
    }
    console.log(this.stack1)
    return number
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this.stack2 = []
    for (i = this.stack1.length; i > -1; i--) {
        this.stack2.push(this.stack1[i])
    }
    
    let number = this.stack2.pop()
    return number
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.stack1.length === 0) {
        return true
    } else {
        return false
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */