const projects = [
  p("race-sim", "An attempt to make a full race sim with RL models for the drivers and race engineers"),
  p("1.58bitLLM", "An implementation of the 1.58 LLM Experimental Research Idea"),
  p("hacktu-web", "Designed the entire website for HackTU 7.0. https://hacktu.ccstiet.com"),
  p("sat-robot-mesh-network", "An ESP32 mesh network designed to provide the SAT Robot (built by PLEX) with continuous internet access in spots without internet"),
  p("stockchain", "A custom blockchain, implemented for trading"),
  p("f1-elo-engine", "An ELO system for ranking Formula One Drivers, on a lap by lap basis"),
  p("hacktu7.0", "Organised HackTU 7.0, with 500+ participants, 10+ judges from across the globe & 5 lakhs in prizes"),
];

function p(name, description) {
  return { name, description };
}

function mkdiv(parent, className, textContent) {
    const output = document.createElement("div");
    output.classList.add(className);
    output.textContent = textContent;
    parent.appendChild(output);
}

function addProject(projectsDiv, name, description) {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  {
    const cmdDiv = document.createElement("div");
    cmdDiv.classList.add("cmd");

    mkdiv(cmdDiv, "carot", ">");
    mkdiv(cmdDiv, "bin", "cat");
    mkdiv(cmdDiv, "file", name + ".txt");

    projectDiv.appendChild(cmdDiv);
  };
  mkdiv(projectDiv, "content", description);

  projectsDiv.appendChild(projectDiv);
}

window.onload = () => {
  const projectsDiv = document.getElementById("projects");
  for (const project of projects) {
    addProject(projectsDiv, project.name, project.description);
  }
}
