var Store = (function() {
  var subscribers = [];

  function init() {
    subscribers = [];
  }

  function subscribe(fn) {
    subscribers.push(fn);
  }

  function dispatch(action) {
    subscribers.forEach(function(fn){
      fn(action);
    })
  }

  return {
    init: init,
    subscribe: subscribe,
    dispatch: dispatch,
  };
})();