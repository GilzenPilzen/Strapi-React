import Link from 'next/link'
function Navigation() {

    return (
        <div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/projecten">Projecten</Link>
            </nav>
        </div>
    )
}

export default Navigation