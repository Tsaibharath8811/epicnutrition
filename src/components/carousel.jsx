import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div style={{marginTop:"1%"}}>

    
    <Carousel>
     
       

      

        

      <Carousel.Item style={{backgroundColor:"#7EFCAC"}}>
        <img
        
        style={{width:"50%",height:"400px"}}
          className="d-block "
          src="./3.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"#7EFCAC"}}>
        <img
        style={{width:"50%",height:"400px",float:"right"}}
          className="d-block "
          src="./4.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"#E2FC62"}}>
        <img
        style={{width:"50%",height:"400px"}}
          className="d-block"
          src="./5.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"#E2FC62"}}>
        <img
        style={{width:"50%",height:"400px",float:"right"}}
          className="d-block"
          src="./6.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;