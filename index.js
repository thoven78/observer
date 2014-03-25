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
    add: function(data) {
      if (this.list.indexOf(data) === -1) {
        this.list.push(data);
        this.trigger('add');
      }
      return this.list;
    },
    remove: function(data) {
      var index = this.list.indexOf(data);
      if (index > -1) {
        this.list.splice(index, 1);
        this.trigger('remove');
      }
      return this.list;
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