import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { getApiUrl } from '../utils/api';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [softwareExperience, setSoftwareExperience] = useState('');
  const [hardwareExperience, setHardwareExperience] = useState('');
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

    const softwareArray = softwareExperience.split(',').map(s => s.trim()).filter(s => s);
    const hardwareArray = hardwareExperience.split(',').map(s => s.trim()).filter(s => s);

    try {
      const response = await fetch(getApiUrl('/api/signup'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          software_experience: softwareArray,
          hardware_experience: hardwareArray,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Signup successful! You can now log in.');
        setEmail('');
        setPassword('');
        setSoftwareExperience('');
        setHardwareExperience('');
      } else {
        setMessage(data.detail || 'Signup failed.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('An error occurred during signup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Sign Up" description="Sign up for an account">
      <main className="auth-page-wrapper">
        <div className="auth-blob blob-1"></div>
        <div className="auth-blob blob-2"></div>

        <div className="glass-card auth-card signup-card">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join our community of AI physical explorers</p>
          
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

            <div className="auth-form-group">
              <label htmlFor="softwareExperience" className="auth-label">Software Experience</label>
              <input
                type="text"
                id="softwareExperience"
                className="auth-input"
                placeholder="e.g. Python, React, PyTorch"
                value={softwareExperience}
                onChange={(e) => setSoftwareExperience(e.target.value)}
                disabled={loading}
              />
              <small style={{ display: 'block', marginTop: '0.25rem', opacity: 0.7, fontSize: '0.75rem' }}>
                Separate multiple skills with commas
              </small>
            </div>

            <div className="auth-form-group">
              <label htmlFor="hardwareExperience" className="auth-label">Hardware Experience</label>
              <input
                type="text"
                id="hardwareExperience"
                className="auth-input"
                placeholder="e.g. Raspberry Pi, Arduino, ESP32"
                value={hardwareExperience}
                onChange={(e) => setHardwareExperience(e.target.value)}
                disabled={loading}
              />
              <small style={{ display: 'block', marginTop: '0.25rem', opacity: 0.7, fontSize: '0.75rem' }}>
                Separate multiple devices with commas
              </small>
            </div>

            <button
              type="submit"
              className="auth-button"
              disabled={loading}
            >
              {loading ? (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span className="loading-spinner"></span> Creating Account...
                </span>
              ) : 'Sign Up'}
            </button>
          </form>

          {message && (
            <div className={`auth-message ${message.includes('successful') ? 'auth-message-success' : 'auth-message-error'}`}>
              {message}
            </div>
          )}

          <p className="auth-footer-text">
            Already have an account? <a href="/login" className="auth-link">Log in instead</a>
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default SignupPage;
