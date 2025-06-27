
class ForgotPasswordService {
  static async requestPasswordReset(email) {
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';  //URL configurada no .env OU ambiente de desenvolvimento

      // Vericando se o backend está acessível 
      const response = await fetch(`${backendUrl}/forgot-password`, {
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
      
      // Fallback para um backend local ou alternativo
      const fallbackUrl = 'http://localhost:5000';  
      const response = await fetch(`${fallbackUrl}/forgot-password`, {
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