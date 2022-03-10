function Withdraw() {
  // const ctx = React.useContext(UserContext)
  // return (<h1>Withdraw<br/>{JSON.stringify(ctx)}</h1>)
  // {"users":[{"name":"abel","email":"abel@mit.edu","password":"secret","balance":100}]}
  return (
    <Card
      bgcolor ="primary"
      txtcolor="white"
      header  ="Withdraw"
      title   ="Withdraw from Account"
      text    ="Withdraw from your account with Bad Bank"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  )
}
