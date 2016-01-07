let goLogin = () => {
  FlowHelpers.go2("auth.login")
}
let goHome = () => {
  FlowHelpers.go2("home")
}

let goSignUpToken = (id) => {
  FlowHelpers.go2("auth.token", {id: id})
}

let goSignCreatePassword = (id) => {
  FlowHelpers.go2("auth.new_password", {id: id})
}

RouteHelpers = {
  goLogin: goLogin,
  goHome: goHome,
  goSignUpToken: goSignUpToken,
  goSignCreatePassword:goSignCreatePassword
}