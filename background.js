const originalHost = 'amazon.com';
const host = 'https://smile.amazon.com';
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const { url: originalUrl } = details;
    const sliceAt = originalUrl.indexOf(originalHost) + originalHost.length;
    const newUrl = `${host}${originalUrl.slice(sliceAt)}`;
    return {
      redirectUrl: newUrl
    };
  }, {
    urls: [
      '*://www.amazon.com/',
      '*://amazon.com/'
    ],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
  }, [
    'blocking'
  ]
)