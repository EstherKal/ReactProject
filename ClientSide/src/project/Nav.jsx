import './style.css'
import { NavLink } from "react-router-dom"
import { CurentUser } from './CurentUser'
import { useSelector } from 'react-redux'
import './redux/Store'
import SvgIcon from '@mui/material/SvgIcon';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { AccountCircleOutlined, AccountCircleRounded, AccountCircleSharp, AccountCircleTwoTone, Add, AddAPhoto, AddAPhotoTwoTone, AddAlarm, Home, LocalDining, LocalDiningOutlined, LocalDiningSharp, LocalDiningTwoTone, Person, Person2TwoTone, SentimentSatisfiedAltRounded } from '@mui/icons-material'


export const Nav = () => {

  const user = useSelector(x => x.currentUser)
  const mainuser = useSelector(x => x.mainUser)
  console.log(mainuser)
  console.log(user)
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  return <>
    <link rel="stylesheet" href="style.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <div class="wrapper">
      <nav>
        <div class="content">
          <div class="logo">
            <img src={`${process.env.PUBLIC_URL}/image/logo1.png`} class="img"></img>
          </div>
          <ul class="links">
            <li><NavLink to={'/Home'} className='link'><HomeIcon fontSize="medium" /> Home</NavLink></li>
            <li><NavLink to={'/Log'} className='link'> <AccountCircleTwoTone></AccountCircleTwoTone>Login</NavLink></li>
            <li><NavLink to={'/Register'} className='link'><PersonAddAltIcon></PersonAddAltIcon> register</NavLink></li>
            <li><NavLink to={'/AllRecipe'} className='link'><LocalDiningTwoTone></LocalDiningTwoTone> Recipe</NavLink></li>
            <li>{(user.email === mainuser.email && user.password === mainuser.password) &&
              <>  <NavLink to={'/CurentUser'} className='link'><Person></Person>  manager</NavLink>
                <NavLink to={'/Category'} className='link'><AddCircleIcon></AddCircleIcon>Categories</NavLink>
                <NavLink to={'/Level'} className='link'><AddCircleIcon></AddCircleIcon>Levels</NavLink>
              </>
            }</li>
            <li>{user.firstName !== "anonymous" && user.email !== mainuser.email &&
              <NavLink to={'/CurentUser'} className='link'><Person></Person> {user.firstName}</NavLink>}
            </li>
          </ul>
        </div>
      </nav>
    </div>





    {/* <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>

<div id='cssmenu'>
<ul>
   <li><NavLink to={'/Home'} className='link'>Home</NavLink></li>
   <li> <NavLink to={'/Log'} className='link'>Login</NavLink></li>
   <li><NavLink to={'/Register'} className='link'>register</NavLink></li>
   <li><NavLink to={'/AllRecipe'} className='link'>Recipe</NavLink></li>
   <li>{ (user.email===mainuser.email && user.password===mainuser.password) &&
        <>
        <NavLink to={'/CurentUser'} className='link'>mainUser</NavLink> &&
        <NavLink to={'/Category'} className='link'>Categories</NavLink> &&
        <NavLink to={'/Level'} className='link'>Levels</NavLink></>
        }</li>
   <li>{user.firstName!=="anonymous"&& user.email!==mainuser.email &&
        <NavLink to={'/CurentUser'} className='link'>{user.firstName}</NavLink>}
    </li>
</ul>
</div> */}
    {/* <div className='nav'>
        <NavLink to={'/Home'} className='link'>Home</NavLink>
        <br></br>
        <NavLink to={'/Log'} className='link'>Login</NavLink>
        <br></br>
        <NavLink to={'/Register'} className='link'>register</NavLink>
        <br></br>
        <NavLink to={'/AllRecipe'} className='link'>Recipe</NavLink> 
        <br></br>
        { (user.email===mainuser.email && user.password===mainuser.password) &&
        <>
        <NavLink to={'/CurentUser'} className='link'>mainUser</NavLink> &&
        <NavLink to={'/Category'} className='link'>Categories</NavLink> &&
        <NavLink to={'/Level'} className='link'>Levels</NavLink></>
        } */}
    {/* {user.firstName!="anonymous"&&(user.email!=mainuser.email || user.passsword!=mainuser.password)&& */}

    {/* {user.firstName!=="anonymous"&& user.email!==mainuser.email &&
        <NavLink to={'/CurentUser'} className='link'>{user.firstName}</NavLink>}
    
        <br></br> */}
    {/* <br></br>
        <NavLink to={'/Category'} className='link'>Categories</NavLink>
        <br></br>
        <NavLink to={'/Level'} className='link'>Levels</NavLink> */}
    {/* </div> */}
  </>
}