// 利用script 标签的 跨域特性来处理，但是这种一般只能处理 get 请求 ，
// put 其他的请求 参数不好携带

export function jsonp(url, jsonpCallback, callback) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = `${url}?callback=${jsonpCallback}`;
  window[jsonpCallback] = (data) => {
    callback && callback(data);
    document.body.removeChild(script);
  }
  document.body.appendChild(script);
}