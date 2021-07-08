import { useCallback, useEffect, useState } from "react"

const storage = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);
    localStorage.setItem(storage, JSON.stringify({token: jwtToken, userId: id}));
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(storage);
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storage) || '{}')
    if (data && data.token) login(data.token, data.userId);
  }, [login])

  return {login, logout, token, userId}
}