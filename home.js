function Home(){
  // const ctx = React.useContext(UserContext)
  // {JSON.stringify(ctx)}
  // {"users": [{"name":"abel","email":"abel@mit.edu","password":"secret","balance":100}]}
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Bad Bank Landing Page"
      title="Welcome to the bank"
      text="You can use this bank"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
