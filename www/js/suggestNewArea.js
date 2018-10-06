let fullString = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
while(fullString.charAt(0) === '?')
{
 fullString = fullString.substr(1);
}
fullString = fullString.replace(/%20/g," ");
console.log("sup");
console.log(fullString);

document.getElementById("back").setAttribute("href", `areaList.html?${fullString}`);
