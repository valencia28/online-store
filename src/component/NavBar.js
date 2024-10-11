import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const menuList = ['WOMEN', 'MEN', 'KIDS', 'HOME', 'BEAUTY'];
    const navigate = useNavigate();
    const goToSignIn =()=>{
        navigate("/signin")
    };

    const search=(event)=>{
        if(event.key === "Enter"){
            //입력한 검색어 읽어와서 
            let keyword = event.target.value;
            
            //url 바꿔주기
            navigate(`/?q=${keyword}`);
        }
    }

  return (
    <div>
        <div className="nav-top">
            <img
                width={65} 
                height={40}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png" 
            />
            <div className="search-sign-in-area">
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyDown={(event)=>search(event)}/>
                </div>
                <div className="sign-in-button" onClick={goToSignIn}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>SIGN IN</div>
                </div>
            </div>
        </div>

        <ul className="menu-list">
            {menuList.map((menu) => (<li>{menu}</li>))}
        </ul>

    </div>
  )
}

export default NavBar
