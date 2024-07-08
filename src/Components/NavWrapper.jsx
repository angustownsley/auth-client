import NavButton from './NavButton'

export default function NavWrapper() {
    
    return (
        <>
            <NavButton buttonType={'login'} text={'Login'} />
            <NavButton buttonType={'register'} text={'Register'} />
        </>
    )
}
