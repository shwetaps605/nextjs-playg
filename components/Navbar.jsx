import Link from "next/link";

const Navbar = () => {

    const myComponentStyle = {
        color: 'black',
        backgroundColor: "#fefefe"
    }

    const navLinkStyle = {
        marginLeft: '1.5em',
    }

    const links = [
        {href:'/client',label:'client'},
        {href:'/drinks',label:'drinks'},
        {href:'/prisma-example',label:'prisma-example'},
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