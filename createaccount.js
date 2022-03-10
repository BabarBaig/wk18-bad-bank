function CreateAccount() {
  // const ctx = React.useContext(UserContext)
  // return (<h1>Create Account<br/>{JSON.stringify(ctx)}</h1>)
  return (
    <Card
      bgcolor ="primary"
      txtcolor="white"
      header  ="Create Account"
      title   ="Create An Account"
      text    ="Get started today with a new account with Bad Bank!"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  )
}
