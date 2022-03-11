function Login() {
  const [show,     setShow]     = React.useState(true)
  const [status,   setStatus]   = React.useState('')
  const [name,     setName]     = React.useState('')
  const [email,    setEmail]    = React.useState('')
  const [password, setPassword] = React.useState('')
  const ctx = React.useContext(UserContext)
  // return (<h1>Login<br/>{JSON.stringify(ctx)}</h1>)

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label)
      setTimeout(() => setStatus(''), 3000)
      return false
    }
    return true
  }
  
  function handleLogin() {
    console.log(name, email, password)
    if (!validate(email,   'email'))    return
    if (!validate(password,'password')) return
    // ctx.users.push({name, email, password, balance:100})
    setShow(false)
  }

  return (
    <Card
      bgcolor="warning"
      txtcolor="black"
      header="Login"
      text="Login to your account with Bad Bank!"
      // body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      body={(<>
        Email address<br />
        <input type="input" className="form-control" id="email" placeholder="Enter email"
          value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
        Password<br />
        <input type="password" className="form control" id="password" placeholder="Enter password"
          value={password} onChange={e => setPassword(e.currentTarget.value)} /><br /><br />
        <button type="submit" className="btn btn-light" onClick={handleLogin} >
          Login</button>
      </>)}
    />
  )
}
