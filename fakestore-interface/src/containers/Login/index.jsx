import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
    ForgotPasswordLink,
    SignUpLink,
    Form,
    H2,
    InputContainer,
    LeftContainer,
    LoginContainer,
    P,
    RightContainer
} from "./styles";

import { Button } from "../../components/Button";

export function Login() {

    const schema = yup.object({
        email: yup.string().email("Email inválido").required("O email é obrigatório"),
        password: yup.string().min(6, "A senha deve ter no mínimo 6 caracteres").required("A senha é obrigatória")
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)

    }); console.log(errors)

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <LoginContainer>
            <LeftContainer>
                <P></P>
            </LeftContainer>

            <RightContainer>
                <H2>Seja bem-vindo à Loja dos Produtos que Deveriam Existir!</H2>
                <P>Aqui, tudo é Fake — mas o objetivo é real: Unir entretenimento com aprendizado.</P> <br /><br />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" placeholder="Digite seu email" {...register("email")} />
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha" {...register("password")} />
                    </InputContainer>

                    <Button type="submit">Entrar</Button> <br />

                    <ForgotPasswordLink to="/forgot-password">Esqueci minha senha</ForgotPasswordLink>
                </Form>
                <span>Não possui uma conta?</span>
                <SignUpLink to="/signup">Clique AQUI</SignUpLink>

            </RightContainer>

        </LoginContainer>
    );
}