import CardDeprecated from 'react-bootstrap/Card';

import CardDivider from './CardDivider';
import CardSection from './CardSection';

const Card = CardDeprecated;
Card.Divider = CardDivider;
Card.Section = CardSection;
Card.SectionContent = CardSection.Content;
Card.SectionTitle = CardSection.Title;
Card.SectionActions = CardSection.Actions;
Card.SectionAction = CardSection.Action;
Card.SectionText = CardSection.Text;

export { default as CardDeck } from 'react-bootstrap/CardDeck';

export default Card;
