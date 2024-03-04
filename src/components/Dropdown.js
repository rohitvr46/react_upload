import React,{ useState} from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown(props) {

    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const MenuItems  = props.val; 
    return (
        <>
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' :  props.pos == '2'?'dropdown-menu1': 'dropdown-menu'}>
            {
                MenuItems.map((item,index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to = {item.path} onClick={() => setClick(false)}>{item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default Dropdown;