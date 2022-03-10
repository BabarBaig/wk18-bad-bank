function Login() {
  // const ctx = React.useContext(UserContext)
  // return (<h1>Login<br/>{JSON.stringify(ctx)}</h1>)
  return (
    <Card
      bgcolor ="primary"
      txtcolor="white"
      header  ="Login"
      title   ="Login to Account"
      text    ="Login to your account with Bad Bank!"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  )
}
