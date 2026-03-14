import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router';


export default function Connect(){
    return(
        <div className="flex gap-6 mt-4 ml-2 text-2xl ">
            <a target='_blank' className='hover:text-blue-500 ' href='https://www.linkedin.com/in/nakulkumar126'><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a target='_blank' className='hover:text-gray-500 ' href='https://github.com/Nakul-Kumar01'><FontAwesomeIcon icon={faGithub} /></a>
            <NavLink to={"/contact"}><div className='hover:text-red-500 '><FontAwesomeIcon icon={faEnvelope} /></div></NavLink>
        </div>
    )
}