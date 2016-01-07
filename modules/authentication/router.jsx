FlowRouter.route('/login', {
  name: "auth.login",
  action() {
    ReactLayout.render(AuthLayout, {content: <Auth_LoginPage/>})
  }
});

FlowRouter.route('/signup', {
  name: "auth.signup",
  action() {
    ReactLayout.render(AuthLayout, {content: <Auth_SignUpPage/>})
  }
});

FlowRouter.route('/signup/token/:id', {
  name: 'auth.token',
  action() {
    ReactLayout.render(AuthLayout, {content: <Auth_SignUpTokenPage />})
  }
});

FlowRouter.route('/signup/password/:id', {
  name: 'auth.new_password',
  action() {
    ReactLayout.render(AuthLayout, {content: <Auth_SignUpNewPasswordPage />})
  }
})

