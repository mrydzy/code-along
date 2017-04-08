var Preview = (function() {
  var iframe = document.querySelector('iframe#preview');
  var iDoc = iframe.contentWindow.document;
  var titleSize = 2;
  var textSize = 1;

  function setTitle(action) {
    iDoc.querySelector('.title')
      .innerHTML = action.payload;
  }

  function setText(action) {
    iDoc.querySelector('.content')
      .innerHTML = action.payload;
  }

  function changeTitleSize(action) {
    if (action.payload == 'inc') {
      titleSize += 0.2;
    } else {
      titleSize -= 0.2;
    }
    iDoc.querySelector('.title')
      .style.fontSize = titleSize + 'em';
  }

  function changeContentSize(action) {
    if (action.payload == 'inc') {
      textSize += 0.2;
    } else {
      textSize -= 0.2;
    }
    iDoc.querySelector('.content')
      .style.fontSize = fontSize + 'em';
  }

  function changeTextSize(action) {
    iDoc.querySelector('.content')
      .innerHTML = action.payload;
  }

  function changeTitleColor(action) {
    iDoc.querySelector('.title')
      .style.color = action.payload;
  }

  function changeTextColor(action) {
    iDoc.querySelector('.content')
      .style.color = action.payload;
  }

  function changeBackgroundColor(action) {
    iDoc.querySelector('.general')
      .style.backgroundColor = action.payload;
  }

  function reducer(action) {
    if (!action) return;
    document.querySelector('#preview-column')
      .classList.add('show');
    switch (action.type) {
      case 'SET_TITLE':
        setTitle(action);
        break;
      case 'CHANGE_TITLE_COLOR':
        changeTitleColor(action);
        break;
      case 'CHANGE_CONTENT_COLOR':
        changeTextColor(action);
        break;
      case 'CHANGE_BACKGROUND_COLOR':
        changeBackgroundColor(action);
        break;
      case 'SET_CONTENT':
        setText(action);
      case 'CHANGE_TITLE_SIZE':
        changeTitleSize(action);
      default:
        break;
    }
  }

  function writeBoilerplate() {
    var title = iDoc.createElement('h1');
    var content = iDoc.createElement('p');
    var body = iDoc.querySelector('body');
    title.classList.add('title');
    content.classList.add('content');
    body.classList.add('general');
    body.append(title);
    body.append(content);
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