var Preview = (function() {
  var iframe = document.querySelector('iframe#preview');
  var iDoc = iframe.contentWindow.document;

  function setTitle(action) {
    iDoc.querySelector('.title')
      .innerHTML = action.payload;
  }

  function reducer(action) {
    if (!action) return;
    document.querySelector('#preview-column')
      .classList.add('show');
    switch (action.type) {
      case 'SET_TITLE':
        setTitle(action);
        break;
      default:
        break;
    }
  }

  function writeBoilerplate() {
    var title = iDoc.createElement('h1');

    title.classList.add('title');

    iDoc
      .querySelector('body')
      .append(title)
  }

  function init() {
    console.log('Preview initialized');
    writeBoilerplate();
    Store.subscribe(reducer);
  }

  function updatePreview(value) {
    iDoc.write(value);
  }

  return {
    init: init,
    updatePreview: updatePreview,
  };
})();