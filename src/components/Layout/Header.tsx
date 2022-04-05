import mealsImage from '../../assets/meals.jpg'
import { StyledHeader, MainImage, Image } from './Header.styles';
import HeaderCartButton from './HeaderCartButton';

interface HeaderProps {
}

const Header = (props: HeaderProps) => {
    return (
        <>
        <StyledHeader>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </StyledHeader>
        <MainImage>
            <Image src={mealsImage} alt="A table full of delicious food!" />
        </MainImage>
        </>
    );
}

export default Header;