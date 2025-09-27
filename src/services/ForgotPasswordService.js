
class ForgotPasswordService {
  static async requestPasswordReset(email) {
    try {
      const baseUrl = process.env.VITE_BACKEND_URL || 'http://localhost:3001';  

      // Vericando se o backend está acessível 
      const response = await fetch(`${baseUrl}/forgot-password`, {
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
      //Fallback para um erro de rede
      console.error('Erro na comunicação com o backend, tentando fallback local...', error);
      
       
      const response = await fetch(`${baseUrl}/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const fallbackData = await response.json();
      if (!response.ok) {
        throw new Error(fallbackData.error || 'Erro ao enviar solicitação de recuperação (fallback)');
      }

      return fallbackData;
    }
  }
}

export default ForgotPasswordService;