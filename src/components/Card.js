import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'

function CardSintetic(props) {
    let icon = props.cardType === 'orange' ? faLightbulb : props.cardType === 'blue' ? faScaleBalanced : faLandmark 
    return (
        <>
            <Card className="inline" style={{ width: '18rem', backgroundColor: props.color, color: 'white', border: props.border, borderRadius: 0 }}>
                <Card.Body>
                    <Card.Title className="mb-3"><FontAwesomeIcon icon={icon} /></Card.Title>
                    <Card.Subtitle className="mb-2">{props.title}</Card.Subtitle>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus dui lectus, quis scelerisque justo tempor vel. 
                    </Card.Text>
                </Card.Body>
                <FontAwesomeIcon icon="fa-solid fa-lightbulb-on" />
            </Card>
        </>
    );
}

export default CardSintetic;