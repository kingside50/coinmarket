
const Button = ({style, content,  action}) => {


    return (
        <button className={style} onClick={() => alertMessage(action)}>
            {content}
        </button>
    )
}

const alertMessage = (message) => {
    alert(message);
}

export default Button;