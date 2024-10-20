{
  // a. 先不考虑包含两种字符，只考虑由6位字符组成
  const regex = /^[0-9A-Za-z]{6,12}$/;

  // b. 如果包含数字字符呢？
  // 先分析，包含某种字符，表示从字符开始至少有其中一个字符。
  // 也是落到了位置的匹配上,在接下来的匹配中至少有一个数字，联想到 使用 (?=)

  // /(?=.*[0-9])/ => 主要关注   .*[0-9]， 表示接下来的字符串中至少有一个数字
  // (?=.*[0-9])^ 表示从字符开头位置开始匹配。 ^ 这个表示字符的开头， 开头前面还有一个位置，
}

{
  // 反向引用
  // var regex = /^((\d)(\d(\d)))\1\2\3\4$/g;
  // var string = "1231231233";
  // console.log(string.match(regex));
}

{
  var regex = /^/;
  var string = '  123  ';
  // 匹配开头空格
  // var regexhead = /^\s+/g;
  // console.log(regexhead.test(string));
  // console.log(string.replace(regexhead, ""));  // => 5
  // console.log(string.replace(regexhead, "").length);  // => 5

  // // 匹配结尾空格
  // var regexTail = /\s+$/g;
  // console.log(regexTail.test(string));
  // console.log(string.replace(regexTail, ""))
  // console.log(string.replace(regexTail, "").length)
}

{
  var regex = /^\s*(.*)\s*$/g;
  var string = '  12 3 ';
  // console.log(regex.test(string));
  // console.log(string.match(regex));
  // console.log(string.replace(/^\s.*?\s$/g, "$1"));

  // function trim(str) {
  //   console.log(str.match(regex))
  //   console.log(str.replace(regex, '$1'));
  //   return str.replace(regex, '$1');
  // }
  // console.log(trim(' foob ar ').length);
}

{
  var regex = /(^|\s)\w/g;
  var string = 'my name is 18';
  console.log(string.match(regex));
}

{
  var regex = /[-_\s]+(.)?/g; // 遇到 空格 _ - 三种字符的时候
}
