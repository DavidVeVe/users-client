async function logIn(payload) {
  const response = await fetch("http://localhost:3000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      api: "unfkktcy"
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  return data;
}

async function signUp(payload) {
  const response = await fetch("http://localhost:3000/api/v1/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      api: "unfkktcy"
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
}

export { logIn, signUp };
