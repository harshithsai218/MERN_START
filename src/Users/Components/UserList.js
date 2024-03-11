import React from 'react';

import UserItem  from "./UserItem";
import '../../Shared/Components/UIElements/Card';
import Card from '../../Shared/Components/UIElements/Card';

import './UserList.css';

const UserList = props=>{
    if(props.items.length === 0){
        return(
            <div className="center">
                <Card>
                <h2>No Users Found !</h2>
                </Card>
            </div>
        );
    }
    return (
        <ul className="user-list">
            {props.items.map(user => (
                <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.placeCount}
                />
            ))}
        </ul>
    );
};

export default UserList;
/*
import React from 'react';
import UserItem from './UserItem';
import Card from '../../Shared/Components/UIElements/Card';
import './UserList.css'; // Importing the CSS file

const UserList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No Users Found!</h2>
                </Card>
            </div>
        );
    }
    return (
        <ul className="users-list"> 
            {props.items.map(user => (
                <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.placeCount}
                />
            ))}
        </ul>
    );
};

export default UserList;
*/