function Observer(){  
  this.on = function(){};
  this.value = '';
  this.change = function(val){
    this.value = val;
    this.on && this.on(val);
  }
}

let observer = new Observer();

export default observer;