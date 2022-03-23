export default function Comment(props) {
    return (
        <div>
            <img src={props.author.avatarUrl} alt={props.author.name}/>
            <p>{props.author.name}</p>
            <p>{props.text}</p>
            <p>{props.date}</p>
        </div>
    )
}