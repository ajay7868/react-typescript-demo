type personName = {
    name: {
        fName: String,
        lName: String,
    }[]
}
export const PersonList = (props: personName) => {
    return (
        <div>
            {props?.name?.map(x => {
                <h2>{x.fName} </h2>
            })}
        </div>
    )
}