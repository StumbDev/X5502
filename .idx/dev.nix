# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    #pkgs.go
    
    # pkgs.python311
    # pkgs.python311Packages.pip
    # pkgs.nodePackages.nodemon
    pkgs.powershell
    pkgs.lua
    pkgs.rustc
    pkgs.rustcat
    pkgs.github-cli
    pkgs.github-release
    pkgs.rustup
    pkgs.perl
    pkgs.perlnavigator
    pkgs.nodejs
  ];

  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "gengjiawen.vscode-wasm"
      "ms-vscode.wasm-wasi-core"
      "astro-build.astro-vscode"
      "mattpocock.ts-error-translator"
      "YoavBls.pretty-ts-errors"
      "YuTengjing.package-manager-enhancer"
      "JohnnyMorganz.luau-lsp"
      "sumneko.lua"
      "tomblind.local-lua-debugger-vscode"
      "golang.go"
      "rust-lang.rust"
      "bscan.perlnavigator"
      "jorol.perl-completions"
      "richterger.perl"
      "solomonkinard.git-tabs"
      "castrogusttavo.symbols"
      "PKief.material-icon-theme"
      "PKief.material-product-icons"
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = {
        # web = {
        #   # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
        #   # and show it in IDX's web preview panel
        #   command = ["npm" "run" "dev"];
        #   manager = "web";
        #   env = {
        #     # Environment variables to set for your server
        #     PORT = "$PORT";
        #   };
        # };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        # Example: install JS dependencies from NPM
        # npm-install = "npm install";
      };
      # Runs when the workspace is (re)started
      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
      };
    };
  };
}
