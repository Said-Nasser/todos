import Sports from '../UI/Sports'
import { connect } from 'react-redux'
import { addSport, removeSport } from '../../actions'

const mapStateToProps = (state: any, props: any) => ({
    sports: state.sports
})
    

const mapDispatchToProps = (disptach: any) => ({
    onAddSport: (text: string) => {
        disptach(
            addSport(text)
        )
    },
    onRemoveSport(index: number) {
        disptach(
            removeSport(index)
        )
    }
})
    

export default connect(mapStateToProps, mapDispatchToProps)(Sports)  
