console.log("LOADED");

var circles = document.getElementById("circles");
info = info.slice(1,info.length-1);

var lines = info.split("\n");

for(var i = 0; i < lines.length; i++){
  var line = lines[i];
  if(line.startsWith("-TEAM ")){
    var teamNameDiv = document.createElement("div");
    var teamName = line.split("-TEAM ")[1]
    teamNameDiv.className = "teamName";
    teamNameDiv.innerText = teamName.toUpperCase();
    if(teamName == "NONE"){
      teamNameDiv.style.color = "rgba(0,0,0,0)";
      teamNameDiv.style.margin = 0;
    }
    if(teamName == "OTHERS"){
      teamNameDiv.innerText = "- - - - - - - - - - - - - - - - - - - - - -";
      teamNameDiv.style["text-decoration"] = "none";
    }
    circles.appendChild(teamNameDiv);
    continue;
  }
  
  var parts = line.split(" ");
  var initials = parts[0];
  var colour = parts[1];
  var paid = parts[2];
  var s = document.createElement("span");
  
  if(initials=="??"){
    s.style.color = "rgba(0,0,0,0)";
    s.style["border-style"] = "dashed";
  }

  s.className = "circle";
  s.style["background-color"] = colour;
  s.innerText = initials;
  if(paid == "P"){
    s.style["border-style"] = "solid";
  }
  else{
    s.style["border-style"] = "dashed";
  }
  circles.appendChild(s);
}
