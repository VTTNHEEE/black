console.log("LOADED");

let circles = document.getElementById("circles");
info = info.slice(1,info.length-1);

for(let line of info.split("\n")){
  if(line.startsWith("-TEAM ")){
    let teamNameDiv = document.createElement("div");
    let teamName = line.split("-TEAM ")[1]
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
  
  let [initials, colour, paid] = line.split(" ");
  let s = document.createElement("span");
  
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
