import Card from './Card';
import CardDivider from './CardDivider';
import CardSection from './CardSection';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

Card.Divider = CardDivider;
Card.Section = CardSection;
Card.Header = CardHeader;
Card.Footer = CardFooter;

export { default as CardDeck } from 'react-bootstrap/CardDeck';
export { default as CardColumns } from 'react-bootstrap/CardColumns';
export { default as CardImg } from 'react-bootstrap/CardImg';
export { default as CardGroup } from 'react-bootstrap/CardGroup';

export default Card;
