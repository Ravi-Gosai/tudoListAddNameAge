import './ListItem.css';

function ListItem(props){


    return(
        <li>
            <p>{props.item.userName}({props.item.age} Year old)</p>
        </li>
    )
}
export default ListItem;