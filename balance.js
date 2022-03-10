function Balance() {
  // const ctx = React.useContext(UserContext)
  // return (<h1>Balance<br/>{JSON.stringify(ctx)}</h1>)
  // {"users":[{"name":"abel","email":"abel@mit.edu","password":"secret","balance":100}]}
  return (
    <Card
      bgcolor ="primary"
      txtcolor="white"
      header  ="Balance"
      title   ="Balance in Account"
      text    ="Balance in your account with Bad Bank"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  )
}
