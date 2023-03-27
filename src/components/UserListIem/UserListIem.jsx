import "./UserListItem.css";

function UserListItem ({ user, onClick }) {

const handlenOnClick = () => {
    onClick && onClick(user)
}

    return (
    <li className="user-list-wrapper">
        <button className="unser-list-button" onClick={handlenOnClick}>{user.name}</button>
    </li>
    )
}

export default UserListItem