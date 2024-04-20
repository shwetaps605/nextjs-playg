import Link from "next/link";

const Navbar = () => {

    const myComponentStyle = {
        color: 'blue',
        lineHeight: 10,
    }

    const navLinkStyle = {
        marginLeft: '1.5em',

    }

    const links = [
        {href:'/client',label:'client'},
        {href:'/drinks',label:'drinks'},
        {href:'/prisma-example',label:'prisma-example'},
        {href:'/query',label:'query'},
        {href:'/tasks',label:'tasks'}
    ]

    return(
            <div className="navbar" style={myComponentStyle}>
            { links.map(link => 
                <Link key={link.href} href={link.href} style={navLinkStyle}>
                    {link.label}
                </Link>)
            }
            </div>
            

    );
}

export default Navbar;