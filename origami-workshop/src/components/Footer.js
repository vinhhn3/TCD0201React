import React, {Component} from 'react';
import Link from './Link';


class Footer extends Component {
    render() {
        return (
            <nav className="Footer">
                <ul>
                    <Link>

                    </Link>
                    <Link url="#">
                        Going to 1
                    </Link>
                    <Link url="#">
                        Going to 2
                    </Link>
                    <Link url="#">
                        Going to 3
                    </Link>
                    <Link url="#">
                        Going to 4
                    </Link>
                    <Link url="#">
                        Going to 5
                    </Link>
                    <Link url="#">
                        Going to 6
                    </Link>
                    <Link url="#">
                        Going to 7
                    </Link>
                    <Link url="#">
                        <img id="logo" src={"blue-origami-bird-flipped.png"} alt="logo"/>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Footer;