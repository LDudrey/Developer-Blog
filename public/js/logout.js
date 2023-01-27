const logout = async () => {
    
  // Send
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    // If logout successful, redirect to the homepage
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to log out');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);