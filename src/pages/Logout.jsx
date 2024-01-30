export default function Logout() {
  localStorage.removeItem('auth-token');
  return window.location = "/"
}
