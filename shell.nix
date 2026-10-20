{ pkgs ? import <nixpkgs> {} }:

let
in
pkgs.mkShell {
  buildInputs = with pkgs; [
    pnpm
    just
    nodejs_24
    typescript-language-server
    javascript-typescript-langserver
  ];

  shellHook = ''
    pnpm i
  '';
}
