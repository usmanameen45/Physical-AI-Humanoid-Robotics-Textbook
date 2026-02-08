import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { getApiUrl } from '../utils/api';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Redirect if already logged in
    if (localStorage.getItem('access_token')) {
      window.location.href = '/docs/intro';
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    // FastAPI's OAuth2PasswordRequestForm expects 'username' and 'password'
    // and application/x-www-form-urlencoded content-type.
    const formBody = new URLSearchParams();
    formBody.append('username', email);
    formBody.append('password', password);

    try {
      const response = await fetch(getApiUrl('/api/token'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('access_token', data.access_token);
        window.dispatchEvent(new Event('auth-change'));
        setMessage('Login successful! Redirecting...');
        setTimeout(() => {
          window.location.href = '/docs/intro';
        }, 1000);
      } else {
        setMessage(data.detail || 'Login failed.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Login" description="Login to your account">
      <main className="auth-page-wrapper">
        <div className="auth-blob blob-1"></div>
        <div className="auth-blob blob-2"></div>
        
        <div className="glass-card auth-card">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Log in to continue your learning journey</p>
          
          <form onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label htmlFor="email" className="auth-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="auth-input"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="auth-form-group">
              <label htmlFor="password" className="auth-label">Password</label>
              <input
                type="password"
                id="password"
                className="auth-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            
            <button
              type="submit"
              className="auth-button"
              disabled={loading}
            >
              {loading ? (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span className="loading-spinner"></span> Logging In...
                </span>
              ) : 'Sign In'}
            </button>
          </form>

          {message && (
            <div className={`auth-message ${message.includes('successful') ? 'auth-message-success' : 'auth-message-error'}`}>
              {message}
            </div>
          )}

          <p className="auth-footer-text">
            Don't have an account? <a href="/signup" className="auth-link">Create one</a>
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default LoginPage;
