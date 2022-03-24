import Avatar from "./Avatar"

export default function Comment(props) {
    return (
        <div>
            <Avatar user={props.author} />
            <p>{props.author.name}</p>
            <p>{props.text}</p>
            <p>{props.date}</p>
        </div>
    )
}