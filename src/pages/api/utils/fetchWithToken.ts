const fetchWithToken = async (url: string, options: RequestInit = {}): Promise<Response> => {
    const token = localStorage.getItem('token');
  
    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`
      };
    }
  
    try {
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      throw new Error('Erro ao fazer a requisição.');
    }
  };
  
  export default fetchWithToken;