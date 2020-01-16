import Header from '../UI/Header'
import { connect } from 'react-redux'
import { logout } from '../../actions'

const mapStateToProps = (state: any, props: any) => ({
    loggedIn: state.login
})


const mapDispatchToProps = (disptach: any) => ({
    
    onLogout() {
        disptach(
            logout()
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)  
