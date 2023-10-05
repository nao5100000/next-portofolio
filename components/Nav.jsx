import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
        <nav className="l-header__nav">
            <ul>
                <li className="only-sp">
                    <Link href="/" className="link js-stick-link">
                        <span>🏠</span>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="" className="js-stick-link">
                        <span>👩‍💻</span>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="" className="js-stick-link">
                        <span>💡</span>
                        Work
                    </Link>
                </li>
                <li>
                    <Link href="" className="js-stick-link">
                        <span>📄</span>
                        Resume
                    </Link>
                </li>
                <li>
                    <Link href="" className="js-stick-link">
                        <span>📮</span>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav