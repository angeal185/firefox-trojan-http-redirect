browser.runtime.onInstalled.addListener(function() {
  console.log('http-redirect installed')
});

browser.tabs.onUpdated.addListener(function(id, info) {
  if(info.status === 'loading'){
    browser.tabs.executeScript(id, {
      allFrames: true,
      file: 'app/js/index.js'
    });
  }
});
