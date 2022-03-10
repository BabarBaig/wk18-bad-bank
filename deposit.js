function Deposit() {
  // const ctx = React.useContext(UserContext)
  // return (<h1>Deposit<br/>{JSON.stringify(ctx)}</h1>)
  return (
    <Card
      bgcolor ="primary"
      txtcolor="white"
      header  ="Deposit"
      title   ="Deposit to Account"
      text    ="Deposit to your account with Bad Bank!"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  )
}
