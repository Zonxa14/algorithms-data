const Heap = require('./Heap');

function MaxHeap(heap_size) {
  //initialize parent class passing in heap size
  Heap.call(this, heap_size);
  //sub class of Head
  console.log('Maxheap Initialized!');
}
//setup the prototypal inheritance change so Maxheap can inherit from Heap
MaxHeap.prototype = Object.create(Heap.prototype);
//Setup constructure of Maxheap to be itself instead of something else
MaxHeap.prototype.constructor = MaxHeap;

/*
    Add Addition methods to Maxheap.
*/

//Insert new value into collection
MaxHeap.prototype.insert = function(value) {
  if (this.count >= this.items.length) {
    try {
      throw 'Error';
    } catch (e) {
      console.log('Sorry Collection is Full. Please Adjust heap size');
      return;
    }
  }
  //append value to the end of the array
  this.items[this.count] = value;
  //put the value in the right position
  this.trickleUp(this.count);
  this.count++;
};

MaxHeap.prototype.removeHighestPriority = function() {
  //return if there is nothing in the collection
  if (this.count === 0) {
    return;
  }

  //get the highest priority
  var min = this.getHighestPriority();

  //now that we have the highest priority, remove the element at the first
  //and replace it with the last
  this.items[0] = this.items[this.count - 1];
  this.items.splice(this.count - 1);
  this.count--;
  //put the value in the right position
  this.trickleDown(0);

  return min;
};

//heapify operation
MaxHeap.prototype.trickleUp = function(index) {
  var parentIndex = this.getParentIndex(index);

  if (
    parentIndex !== -1 &&
    this.getElementAtIndex(index) > this.getElementAtIndex(parentIndex)
  ) {
    this.swap(parentIndex, index);
    this.trickleUp(parentIndex);
  }
};

//heapify operation
MaxHeap.prototype.trickleDown = function(index) {
  //get right and left child indices
  var leftIndex = this.getLeftChildIndex(index);
  var rightIndex = this.getRightChildIndex(index);

  //store the bigger index value of the two (left and right)
  var largerIndex = -1;
  if (leftIndex !== -1 && rightIndex !== -1) {
    //assign the larger index
    largerIndex =
      this.getElementAtIndex(leftIndex) > this.getElementAtIndex(rightIndex)
        ? leftIndex
        : rightIndex;
  } else if (leftIndex !== -1) {
    largerIndex = leftIndex;
  } else if (rightIndex !== -1) {
    largerIndex = rightIndex;
  }

  if (largerIndex === -1) {
    return;
  }

  if (this.getElementAtIndex(largerIndex) > this.getElementAtIndex(index)) {
    this.swap(largerIndex, index);
    this.trickleDown(largerIndex);
  }
};

var maxHeap = new MaxHeap(12);

maxHeap.insert(42);
maxHeap.insert(90);
maxHeap.insert(93);
maxHeap.insert(97);
maxHeap.insert(55);
maxHeap.insert(79);
maxHeap.insert(73);
maxHeap.insert(21);
maxHeap.insert(83);
maxHeap.insert(83);
maxHeap.insert(84);
maxHeap.insert(81);

console.log(maxHeap);
