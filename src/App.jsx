import './App.css'
import Form from './Components/Form'

export default function App() {
    return (
        <div className="App">
            <Form formType={"Register"}/>
            <Form formType={"Login"}/>
        </div>
    )
}
