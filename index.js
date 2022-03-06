function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <Route path="/"         exact component={Home} />
      <Route path="/alldata/"       component={AllData} />
      <Route path="/balance/"       component={Balance} />
      <Route path="/createaccount/" component={CreateAccount} />
      <Route path="/deposit/"       component={Deposit} />
      <Route path="/login/"         component={Login} />
      <Route path="/withdraw/"      component={Withdraw} />
    </HashRouter>
  )
}

ReactDOM.render(<Spa/>, document.getElementById('root'))
