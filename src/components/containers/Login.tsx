import Login from '../UI/Login'
import { connect } from 'react-redux'
import { login } from '../../actions'
const mapStateToProps = (state: any, props: any) => ({
    loggedIn: state.login
})


const mapDispatchToProps = (disptach: any) => ({
    onLogin: () =>{
        disptach(
            login()
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)  
