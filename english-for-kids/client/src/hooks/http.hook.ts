import { useState, useCallback } from 'react';

const base = 'http://localhost:8081/api';

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const request = useCallback(async (url: string, method = 'GET', reqBody = null, reqHeaders = {}) => {
    setLoading(true);
    try {
      const body = JSON.stringify(reqBody);
      const headers = reqHeaders;
      headers['Content-Type'] = 'application/json';

      const response = await fetch(`${base}/${url}`, { method, body, headers });
      const data = await response.json();

      if (!response.ok) {
        throw new Error('There is no such user');
      }
      setLoading(false);
      return data;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);

  const clearError = () => setError(null);

  return {
    loading, request, error, clearError,
  };
};

export default useHttp;
