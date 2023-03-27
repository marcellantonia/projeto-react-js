import UserListIem from "../UserListIem";

function UserList({ users = [], onItemClick }) {

    const handlenOnClick = (user) => {
        onItemClick && onItemClick(user);
    }

const usersMap = users.map( (user) => {
    return (
    <UserListIem key={user.id} user={user} onClick={handlenOnClick}/>
    )
});
    
    return (
        <div>
            {users.length > 0 ? (
                <ul>
                    {usersMap}
                </ul>
        ) :(
            <p>Nenhum usuário cadastrado.</p>               
        )}
        </div>
    )
}

export default UserList;