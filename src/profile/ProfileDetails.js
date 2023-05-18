import React from 'react'
import { Alert, Card } from 'react-bootstrap'

const ProfileDetails = ({person , handelName}) => {
    console.log(handelName)

  return (
    <div>
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      {handelName}
      <hr />
     
    </Alert>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={person.image} />
    <Card.Body>
      <Card.Title style={{ color: 'blue', lineHeight : 5, padding: 5 }}>{person.fullName}</Card.Title>
      <Card.Text>
       <p>{person.bio}</p>
        <p>{person.profession}</p>
      </Card.Text>
     
    </Card.Body>
  </Card>
      
    </div>
  )
}

export default ProfileDetails
