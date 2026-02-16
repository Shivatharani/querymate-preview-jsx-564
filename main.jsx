import React, { useState } from 'react';

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isSignUp) {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      // Simulate sign-up API call
      console.log('Signing Up:', { email, password });
      alert('Sign Up Successful! (Check console for data)');
      // In a real app, you'd send this to a backend
    } else {
      // Simulate sign-in API call
      console.log('Signing In:', { email, password });
      alert('Sign In Successful! (Check console for data)');
      // In a real app, you'd send this to a backend and handle response
    }

    // Reset form
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError(''); // Clear errors when switching forms
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h2 style={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        {error && <p style={styles.errorText}>{error}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          {isSignUp && (
            <div style={styles.inputGroup}>
              <label htmlFor="confirmPassword" style={styles.label}>Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={styles.input}
              />
            </div>
          )}
          <button type="submit" style={styles.button}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <p style={styles.toggleText}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={toggleForm} style={styles.toggleLink}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  formCard: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '30px',
    color: '#333',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: { // Note: This is a conceptual style, requires JS for actual hover
    backgroundColor: '#0056b3',
  },
  toggleText: {
    marginTop: '25px',
    color: '#777',
  },
  toggleLink: {
    color: '#007bff',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: '15px',
    fontSize: '14px',
  }
};

export default AuthPage;