function isAnagram(str1, str2) {

  if (str1.length!=str2.length)
   console.log(false);

var str11 = str1.split("").sort().join("");  
var str22 = str2.split("").sort().join("");  

if(str11==str22)
  console.log(true);
}

isAnagram("panda", "napdka");
