const logout = (navitageTo) => {
  localStorage.clear();
  navitageTo('/login')
};

export default { logout };
