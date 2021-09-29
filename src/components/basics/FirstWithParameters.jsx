export default function FirstWithParameters(props) {
    return (
        <>
            <p>My first name is <strong>{props.firstName}</strong></p>
            <p>My last name is <strong>{props.lastName}</strong></p>
        </>
    );
}