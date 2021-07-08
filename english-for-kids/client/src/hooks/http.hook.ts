import { useState, useCallback } from "react"

const base = 'http://localhost:8081/api';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const request = useCallback(async (url: string, method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    try {
      if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json'
      }

      const response = await fetch(`${base}/${url}`, { method, body, headers });
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Something is wrong in server')
      }
      setLoading(false);
      return data;

    } catch (error) {
      setLoading(false);
      setError(error.message);
      throw error;
    }
  }, []) 

  const clearError = () => setError(null);

  return { loading, request, error, clearError}
}