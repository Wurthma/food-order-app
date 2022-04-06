import { CardDiv } from "./Card.styles";

interface CardProps {
    children: React.ReactNode;
}

const Card = (props: CardProps) => {
    return(
        <CardDiv>{props.children}</CardDiv>
    );
}

export default Card;