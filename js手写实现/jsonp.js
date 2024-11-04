export function jsonp({ url, callback, params }) {
  return new Promise(function(resolve, reject) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    window[callback] = function (data) {
      resolve(data);
      document.body.removeChild(script);
      delete window[callback];
    };
    params = { callback, ...params }
    let paramsArr = []
    for (const key in params) {
      paramsArr.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${paramsArr.join('&')}` 
    document.body.appendChild(script);
  });
}
