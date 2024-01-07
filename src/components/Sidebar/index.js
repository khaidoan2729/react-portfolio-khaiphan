import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faFolderOpen, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'> 
        <Link className='logo' to= '/'>                 {/* default to Homepage*/}
            <h1 className='name'>khai.nrd</h1>
        </Link>

        <nav>
            <NavLink exact='true' activeclassname= "active" to = "/" > 
                <FontAwesomeIcon icon =  {faHome} color = '#4d4d4de'/>
            </NavLink>

            <NavLink 
                exact='true' 
                activeclassname= "active" 
                className = "about-link" 
                to = "/About" 
            > 
                <FontAwesomeIcon icon =  {faUser} color = '#4d4d4de'/>
            </NavLink>

            <NavLink 
                exact='true' 
                activeclassname= "active" 
                className = "projects-link" 
                to = "/projects" 
            > 
                <FontAwesomeIcon icon =  {faFolderOpen} color = '#4d4d4de'/>
            </NavLink>
            <NavLink 
                exact='true' 
                activeclassname= "active" 
                className = "contact-link" 
                to = "/contact" 
            > 
                <FontAwesomeIcon icon =  {faEnvelope} color = '#4d4d4de'/>
            </NavLink>
        </nav>

        <ul>
            {/*Linkedin icon and link to website*/}
            <li>
                <a
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://www.linkedin.com/in/khai-phan-b54757231/"
                >
                    <FontAwesomeIcon icon = {faLinkedin} color = '#4d4d4e'/>
                </a>
            </li>


            {/*Github icon and link to website*/}
            <li>
                <a
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://github.com/khaidoan2729"
                >
                    <FontAwesomeIcon icon = {faGithub} color = '#4d4d4e'/>
                </a>
            </li>
        </ul>



    </div>
)

export default Sidebar