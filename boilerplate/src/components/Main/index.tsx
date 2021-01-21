import * as S from './styles'

const Main = ({
    title = 'Orientu',
    description = 'Orientu é um produto para te ajudar na sua escolha profissional!'
}) => 
<S.Wrapper>
    <S.Logo src="/img/Subtract.png" alt="Imagem da logomarca inspirada em uma bússola seguida da palavra Orientu"></S.Logo>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/Rectangle.png" alt="Ilustração de uma pessoa animada e comemorando"></S.Illustration>
</S.Wrapper>

export default Main