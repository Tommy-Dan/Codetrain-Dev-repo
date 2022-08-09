import React from "react";
import User from "./User";
import { Row, Container } from "react-bootstrap";

function Contact(props) {
	return (
        <div>
            <Container>
                <Row>
                    {props.contactData.map((item, index) => {
                        return <User 
                            key={index} 
                            userContact={item} 
                            delete={props.delete}
                            editUser={ props.editUser}
                            />
                    })}
                </Row>
            </Container>

        </div>
	);
}

export default Contact;