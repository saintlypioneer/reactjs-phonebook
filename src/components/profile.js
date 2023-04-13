function Profile(props){

    const elem = JSON.parse(localStorage.getItem("profile"));
    

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <span>{elem.name}</span>
            <span>{elem.avatar}</span>
            <span>{elem.address}</span>
            <span>{elem.label}</span>
            <span>{elem.phoneNumber}</span>
        </div>
    );
}

export default Profile;