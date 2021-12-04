const str1 = 'utf8',
  str2 = 'utf-8',
  str3 = 'UTF8',
  str4 = 'utf9',
  str5 = 'gb2312',
  str6 = 'gbk';


console.log(Buffer.isEncoding(str1));
console.log(Buffer.isEncoding(str2));
console.log(Buffer.isEncoding(str3));
console.log(Buffer.isEncoding(str4));
console.log(Buffer.isEncoding(str5));
console.log(Buffer.isEncoding(str6));