!(function() {
  
  var global = this,
      observer;
      
  observer = {
    list: [],
    listeners: {},
    
    trigger: function(type) {
      var n = 0
          length = this.listeners[type].length;
      if (this.listeners[type]) {
        for (; n < length; n++) {
          this.listeners[type][n](this);
        }
      }
    },
    on: function(type, fn) {
      if (!this.listeners[type]) {
        this.listeners[type] = [];
      }
      this.listeners[type].push(fn);
    }
  };
  
  // expose the object to in the window
  global.observer = observer;
}).call(this);