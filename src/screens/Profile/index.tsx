import React from 'react';
import { Feather } from '@expo/vector-icons';
import { 
    Wrapper,
    Container, 
    Header, 
    HeaderButtonContainer, 
    ButtonIcon, 
    ButtonText,
    ContentContainer,
} from '../Profile/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import Input from '../../components/Input'
import { Button } from '../../components/Button';


export default function Profile({navigation }) {
    const handleLogout = async () => {
        try {
            // Remove os dados do AsyncStorage
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('user');

            // Redireciona para a tela de login
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });

            Alert.alert('Logout realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao realizar logout:', error);
            Alert.alert('Erro ao realizar logout. Tente novamente.');
        }
    };
    return (
        <Wrapper>
            <Header>
                <HeaderButtonContainer onPress={() => navigation.goBack()}>
                    <ButtonIcon>
                        <Feather size={16} name="chevron-left" color={theme.COLORS.BLUE} />
                    </ButtonIcon>
                    <ButtonText>
                        Voltar
                    </ButtonText>
                </HeaderButtonContainer>
                <Logo />
            </Header>

            <Container>
                <ContentContainer>
                    <Input label='Nome' placeholder='digite seu nome'/>
                    <Input label='E-mail' placeholder='digite seu e-mail'/>
                    <Input label='Senha' placeholder='digite sua senha'/>
                </ContentContainer>

                <Button 
                    title="Salvar informações" 
                    noSpacing={true} 
                    variant='primary'
                    />
            </Container>
        </Wrapper>
    );
}
