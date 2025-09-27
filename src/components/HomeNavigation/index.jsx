import {
  NavigationContainer,
  NavigationGrid,
  NavButton,
  ButtonIcon,
  ButtonText,
  ButtonSubtext,
} from './styles';

export function HomeNavigation() {
  
  const handleAboutClick = () => {
    window.open('https://www.linkedin.com/in/vinicius-zanotti/', '_blank');
  };

  const handleContactClick = () => {
    window.open('mailto:vinizanotti@gmail.com', '_blank');
  };

  const handleSupportClick = () => {
    window.open(
      'https://wa.me/5541998258938?text=Olá, preciso de ajuda!',
      '_blank',
    );
  };

  return (
    <NavigationContainer>
      <NavigationGrid>
        {/* Botão Sobre o Criador */}
        <NavButton onClick={handleAboutClick} variant="about">
          <ButtonIcon>👨‍💻</ButtonIcon>
          <ButtonText>Sobre o Criador</ButtonText>
          <ButtonSubtext>Conheça quem fez isso</ButtonSubtext>
        </NavButton>

        {/* Botão Contato */}
        <NavButton onClick={handleContactClick} variant="contact">
          <ButtonIcon>📧</ButtonIcon>
          <ButtonText>Contato</ButtonText>
          <ButtonSubtext>Entre em contato</ButtonSubtext>
        </NavButton>

        {/* Botão Suporte/Ajuda */}
        <NavButton onClick={handleSupportClick} variant="support">
          <ButtonIcon>💬</ButtonIcon>
          <ButtonText>Precisa de Ajuda?</ButtonText>
          <ButtonSubtext>Suporte via WhatsApp</ButtonSubtext>
        </NavButton>
      </NavigationGrid>
    </NavigationContainer>
  );
}
