import ProtectedRoute from '../UI/ProtectedRoute'
import { connect } from 'react-redux'
// import { login } from '../../actions'

const mapStateToProps = (state: any, props: any) => ({
    loggedIn: state.login,
    path: "/profile"
})



export default connect(mapStateToProps)(ProtectedRoute)  
