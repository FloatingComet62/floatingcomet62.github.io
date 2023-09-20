
export interface Lang {
  name: string;
  color: string;
  link: string;
}
export interface Project {
  name: string;
  icon: string;
  description: string;
  repo: string;
  color: string;
}

export const langs: Lang[] = [
  { name: "Typescript", color: "#2c78c6", link: "https://www.typescriptlang.org/" },
  { name: "Rust", color: "#f64a00", link: "https://www.rust-lang.org/" },
  { name: "C", color: "#6598d1", link: "https://en.wikipedia.org/wiki/The_C_Programming_Language" },
  { name: "Python", color: "#376f9d", link: "https://www.python.org/" },
  { name: "C#", color: "#964c92", link: "https://dotnet.microsoft.com/en-us/languages/csharp" },
  { name: "Javascript", color: "#e9d54c", link: "https://www.javascript.com/" },
  { name: "C++", color: "#017cc6", link: "https://cplusplus.com/" },
];

export const projects: Project[] = [
  {
    name: "Comrade",
    icon: "Comrade.svg",
    description:
      "A good programming language handcrafted by the comet himself",
    repo: "https://github.com/FloatingComet62/comrade/",
    color: "#39BD55"
  },
  {
    name: "CometOS",
    icon: "OS.svg",
    description: "A quick little OS I wrote to learn Rust",
    repo: "https://github.com/FloatingComet62/CometOS",
    color: "#962C2C"
  },
  {
    name: "FluidDB",
    icon: "FluidDB.svg",
    description: "A key value store database I wrote because I was bored",
    repo: "https://github.com/FloatingComet62/FluidDB",
    color: "#3946BD"
  },
  {
    name: "ChessUI",
    icon: "ChessUI.png",
    description: "A chess ui I wrote as a pass time while learning chess",
    repo: "https://github.com/FloatingComet62/ChessUI",
    color: "#444241"
  },
  {
    name: "PainScript",
    icon: "Painscript.svg",
    description: "An esoteric language I wrote",
    repo: "https://github.com/FloatingComet62/PainScript",
    color: "#45A8BF"
  },
];