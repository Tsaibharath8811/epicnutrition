import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample() {
  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
       <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="infant.jpg" />
      <Card.Body>
        <Card.Title>Diet For Infants</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Breast Milk</ListGroup.Item>
        <ListGroup.Item>Iron Fortified Cereal</ListGroup.Item>
        <ListGroup.Item>Banana</ListGroup.Item>
        <ListGroup.Item>Pears</ListGroup.Item>
        <ListGroup.Item>Yogurt</ListGroup.Item>
        <ListGroup.Item>Mashed Vegetables</ListGroup.Item>
        <ListGroup.Item>Cooked Ground Beef</ListGroup.Item>
        <ListGroup.Item>Chicken</ListGroup.Item>
        <ListGroup.Item>Egg</ListGroup.Item>
        <ListGroup.Item>Soft Cooked Beans</ListGroup.Item>
        <ListGroup.Item>Fish</ListGroup.Item>
        <ListGroup.Item>Sliken Tofu</ListGroup.Item>

      </ListGroup>
    </Card> 
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="./elder.jpg" />
      <Card.Body>
        <Card.Title>Diet For Elders</Card.Title>
     
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Papaya</ListGroup.Item>
        <ListGroup.Item>Strawberries</ListGroup.Item>
        <ListGroup.Item>Mangoes</ListGroup.Item>
        <ListGroup.Item>Peaches</ListGroup.Item>
        <ListGroup.Item>Raspberries</ListGroup.Item>
        <ListGroup.Item>Tomatoes</ListGroup.Item>
        <ListGroup.Item>Broccoli</ListGroup.Item>
        <ListGroup.Item>Beets</ListGroup.Item>
        <ListGroup.Item>Carrots</ListGroup.Item>
        <ListGroup.Item>Walnuts</ListGroup.Item>
        <ListGroup.Item>Low Fat Milk</ListGroup.Item>
        <ListGroup.Item>Almond</ListGroup.Item>

      </ListGroup>
     
    </Card> 
    </div>
    

    
  );
}

export default KitchenSinkExample;