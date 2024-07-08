import { useRoute } from 'wouter'
/* eslint-disable react/prop-types */

export default function Dashboard({ isLoggedIn , username}) {
    const [match] = useRoute('/')
    if (match) {
        if (isLoggedIn) {
            return (
                <>
                    <h1>Secret User Info for {`${username}`}</h1>
                </>
            )
        }

        return (
            <>
                <h1>User Not Logged In</h1>
            </>
        )
    }
}
