type Person = {
    name: {
        fName: String,
        lName: String,
    }
    
}

export const Person = (props: Person) => {
    return (
        <h1>{props.name.fName} {props.name.lName}</h1>
    )
    
}