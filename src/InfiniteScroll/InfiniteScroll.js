var listElm = document.querySelector('#infinite-list');

// Add 20 items.
var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 20; i++) {
    var item = document.createElement('li');
    item.innerText = 'Item ' + nextItem++;
    listElm.appendChild(item);
  }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function() {
  // clientHeight : inner height of el, no margin or scrollbar
  // scrollTop : how much you've scrolled
  // scrollHeight: height of ALL content
  // offsetHeight: with scroll innerHeight
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

// Initially loa
