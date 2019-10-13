module.exports = function check(str, bracketsConfig) {
  let brackets = new Map(bracketsConfig);
  let arr = [];
  for (let index = 0; index < str.length; index++) {
    let char = str[index];
    if(char == brackets.get(arr[arr.length - 1]))
      arr.pop();
    else
      arr.push(char);
  }
  return arr.length == 0;
}
