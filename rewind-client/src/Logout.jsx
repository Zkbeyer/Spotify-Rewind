function Logout({setToken, user}) {
    if (!user) return <div style={{padding: '1rem', width: '100px'}}></div>;
    return (
      <div style={{paddingRight : '1rem'}}>
          <button style={{backgroundColor: '#001f14', color: 'white'}} onClick={() => {
              fetch('https://spotify-rewind-backend.onrender.com/logout', {
                method: 'GET',
              }).then(() => {
                localStorage.clear();
                setToken(null);
                window.location.href = '/';
              })
              .catch((error) => {
                console.error('Error logging out:', error);
              });
            }}>Logout</button>
          </div>
    );
}

export default Logout