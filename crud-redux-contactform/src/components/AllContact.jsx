import { Container, Row } from "react-bootstrap";
import Contact from "./Contact";
import { connect, useSelector } from "react-redux";

function AllContacts(props) {
	const { Contacts } = useSelector((state) => {
		return state;
	});
	return (
		<>
			<Container>
				<Row>
					{Contacts.map((item, index) => {
						return (
							<Contact
								key={index}
								ContactInfo={item}
								deleteContact={props.deleteContact}
								editContact={props.editContact}
							/>
						);
					})}
				</Row>
			</Container>
		</>
	);
}
const mapState = (state) => {
	return {
		Contacts: state.Contacts,
	};
};

export default connect(mapState)(AllContacts);


// export default AllContacts;
