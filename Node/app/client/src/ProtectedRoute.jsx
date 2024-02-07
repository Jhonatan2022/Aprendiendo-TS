function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

export { ProtectedRoute }
