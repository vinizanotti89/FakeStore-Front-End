class ForgotPasswordService {
  static async requestPasswordReset(email) {
    try {
      const baseUrl = process.env.VITE_BACKEND_URL || 'http://localhost:3001';  

      const response = await fetch(`${baseUrl}/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar solicitação de recuperação');
      }

      return data; 
    } catch (error) {
      console.error('Erro na comunicação com o backend:', error);
      throw error;
    }
  }
}

export default ForgotPasswordService;
