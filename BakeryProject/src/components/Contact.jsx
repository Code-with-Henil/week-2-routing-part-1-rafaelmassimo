import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';
import Icon from "./images/telephone.png";
import "./Contact.css"

const StyledDiv = styled.div`
display: flex;
    flex-direction: column;
    background-color: rgba(57, 194, 194, 0.122);
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    `;

function Contact() {
    return (
      <>

      <h2>Contact Page</h2>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Get in touch with our Owner</Accordion.Header>
        <Accordion.Body>
           <StyledDiv>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
            <img className='contact' src={Icon} alt='icon'/>
            <p>68985-78798</p>
           </StyledDiv>
           

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Get in touch with our Supervisor</Accordion.Header>
        <Accordion.Body>
            <StyledDiv>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.

            <img className='contact' src={Icon} alt='icon'/>
            <p>68985-78798</p>
            </StyledDiv>
    

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}

export default Contact;