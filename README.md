# CLI
- Work seamlessly with GitHub from the command line.

## USAGE
  gh <command> <subcommand> [flags]

## CORE COMMANDS
  _auth:_        Authenticate gh and git with GitHub
  _browse:_     Open the repository in the browser
  _codespace:_   Connect to and manage codespaces
  _gist:_        Manage gists
  _issue:_       Manage issues
  _org_      Manage organizations
  _pr:_          Manage pull requests
  _project:_     Work with GitHub Projects.
  _release:_     Manage releases
  _repo:_        Manage repositories

## GITHUB ACTIONS COMMANDS
  cache:       Manage Github Actions caches
  run:         View details about workflow runs
  workflow:    View details about GitHub Actions workflows

## ALIAS COMMANDS
  co:          Alias for "pr checkout"

## ADDITIONAL COMMANDS
  alias:       Create command shortcuts
  api:         Make an authenticated GitHub API request
  completion:  Generate shell completion scripts
  config:      Manage configuration for gh
  extension:   Manage gh extensions
  gpg-key:     Manage GPG keys
  label:       Manage labels
  ruleset:     View info about repo rulesets
  search:      Search for repositories, issues, and pull requests
  secret:      Manage GitHub secrets
  ssh-key:     Manage SSH keys
  status:      Print information about relevant issues, pull requests, and notifications across repositories
  variable:    Manage GitHub Actions variables

## HELP TOPICS
  actions:     Learn about working with GitHub Actions
  environment: Environment variables that can be used with gh
  exit-codes:  Exit codes used by gh
  formatting:  Formatting options for JSON data exported from gh
  mintty:      Information about using gh with MinTTY
  reference:   A comprehensive reference of all gh commands

## FLAGS
  --help      Show help for command
  --version   Show gh version

## EXAMPLES
  $ gh issue create
  $ gh repo clone cli/cli
  $ gh pr checkout 321

## LEARN MORE
  Use `gh <command> <subcommand> --help` for more information about a command.
  Read the manual at https://cli.github.com/manual