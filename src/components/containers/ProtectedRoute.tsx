import ProtectedRoute from '../UI/ProtectedRoute'
import { connect } from 'react-redux'

const mapStateToProps = (state: any, props: any) => ({
    loggedIn: state.login,
    path: "/profile"
})



export default connect(mapStateToProps)(ProtectedRoute)  
