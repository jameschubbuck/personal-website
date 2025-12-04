{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };
  outputs = {nixpkgs, ...}: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
      config = {
        allowUnfree = true;
      };
    };
  in {
    devShells.${system}.default = with pkgs;
      mkShell rec {
        buildInputs = [
          bun
          nodejs
          mesa-demos
          glibc
          pango
          at-spi2-atk
          atkmm
          cairo
          gdk-pixbuf
          glib
          gtk3
          harfbuzz
          librsvg
          libsoup_3
          webkitgtk_4_1
          openssl
          gnupg
        ];
        nativeBuildInputs = with pkgs; [
          pkg-config
        ];

        shellHook = ''
          export GRADLE_OPTS="-Dorg.gradle.project.android.aapt2FromMavenOverride=$ANDROID_HOME/build-tools/36.0.0/aapt2 $GRADLE_OPTS"
        '';
      };
  };
}
