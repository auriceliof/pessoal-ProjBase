import './styles.css';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header className='proj-header'> 
            <nav className='proj-container'>
                <div className='proj-header-content'>
                    <Link to="/">
                        <h3>BaseProject</h3>
                    </Link>

                    <div>                        
                        <a href='https://github.com/auriceliof/pessoal-ProjBase'>GitProject</a>
                    </div>
                </div>

            </nav>
        </header>
    );
}
