/* global fetch, WebSocket, location */
(() => {
    const messages = document.querySelector('#messages');
    const wsButton = document.querySelector('#wsButton');
    const logout = document.querySelector('#logout');
    const login = document.querySelector('#login');
    const wssend = document.querySelector('#wssend');
    
  
    const showMessage = (message) => {
      messages.textContent += `\n${message}`;
      messages.scrollTop = messages.scrollHeight;
    };
  
    const handleResponse = (response) => {
      return response.ok
        ? response.json().then((data) => JSON.stringify(data, null, 2))
        : Promise.reject(new Error('Unexpected response'));
    };
  
    login.onclick = () => {
        const uname = document.getElementById('name').value
      fetch('http://localhost:8080/login', { 
          method: 'POST', 
          credentials: 'include' ,
          headers: {
            "Content-Type": "application/json",
        },
          body: JSON.stringify({
              id: uname,
              pwd: "test"
          })
         })
        .then(handleResponse)
        .then(showMessage)
        .catch((err) => showMessage(err.message));
    };
  
    logout.onclick = () => {
      fetch('/logout', { method: 'DELETE', credentials: 'include' })
        .then(handleResponse)
        .then(showMessage)
        .catch((err) => showMessage(err.message));
    };
  
    let ws;
  
    wsButton.onclick = () => {
      if (ws) {
        ws.onerror = ws.onopen = ws.onclose = null;
        ws.close();
      }
  
      ws = new WebSocket(`ws://localhost:8080`);
      ws.onerror = () => showMessage('WebSocket error');
      ws.onopen = () => showMessage('WebSocket connection established');
      ws.onclose = () => showMessage('WebSocket connection closed');
    };

    wssend.onclick = () => {
        const msg = {
            to: document.getElementById('to').value,
            msg: document.getElementById('msg').value
        }
        ws.send(JSON.stringify(msg));


      };

  })();