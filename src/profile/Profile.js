import React from 'react'
import ProfileDetails from './ProfileDetails'
import PropTypes from 'prop-types';

const person=
    {
        fullName:"alaeddine ferchichi",
        bio : "biographie",
        profession :"developpeur FullStack JS",
        image:"https://www.blog-nouvelles-technologies.fr/wp-content/uploads/2017/12/detective-avatar-icon-01--840x500.jpg"
    }
    
const handelName =(name)=> name 
const Profile = () => {
  return (
    <div>
      <ProfileDetails person={person} handelName={handelName(person.fullName)}/>
    </div>
  )
}
person.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profission: PropTypes.string,
    image: PropTypes.string,
  };

export default Profile
