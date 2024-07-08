import { Link } from 'wouter'

/* eslint-disable react/prop-types */
export default function NavButton({
    buttonType,
    text,
    isLoggedIn,
    handleSignout,
}) {
    if (isLoggedIn && buttonType === 'login') {
        return <button onClick={handleSignout}>Sign Out</button>
    }

    if (isLoggedIn) {
        return <></>
    }

    return (
        <Link href={`/${buttonType}`}>
            <button name={buttonType}>
                <span>{text}</span>
            </button>
        </Link>
    )
}
