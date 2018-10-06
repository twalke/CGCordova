let fullString = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
while(fullString.charAt(0) === '?')
{
 fullString = fullString.substr(1);
}
fullString = fullString.replace(/%20/g," ");
var areaTitle = fullString.split("?").shift();
var canyonTitle = fullString.split("?").pop();
console.log(fullString);

document.getElementById("back").setAttribute("href", `suggestNewCanyon.html?${canyonTitle}?${areaTitle}`);
document.getElementById("next").setAttribute("href", `newCanyonDesc.html?${canyonTitle}?${areaTitle}`);
