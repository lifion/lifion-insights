workflow "Checks & Publish" {
  on = "push"
  resolves = ["Test"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Lint" {
  uses = "actions/npm@master"
  needs = ["Install"]
  args = "run eslint"
}

action "Test" {
  uses = "actions/npm@master"
  needs = ["Install"]
  args = "test"
  secrets = ["CODECOV_TOKEN"]
}
