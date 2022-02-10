
type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean,

}

export const Greet = (props: GreetProps 
) => {
    return (
        <div>
            <h2>
                {props.isLoggedIn?
                   ` Helllo ${props.name}!You have ${props.messageCount} unread message!`:'message'
                }
                    </h2>
            
        </div>
    )
}
