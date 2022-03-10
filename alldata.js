function AllData() {
  // const ctx = React.useContext(UserContext)
  // return (<h1>All Data<br/>{JSON.stringify(ctx)}</h1>)
  // {"users":[{"name":"abel","email":"abel@mit.edu","password":"secret","All Data":100}]}
  return (
    <Card
      bgcolor ="primary"
      txtcolor="white"
      header  ="All Data"
      title   ="All Data in Account"
      text    ="All Data in your account with Bad Bank"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  )
}
