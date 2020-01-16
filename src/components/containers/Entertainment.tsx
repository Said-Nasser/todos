import Entertainment from '../UI/Entertainment'
import { connect } from 'react-redux'
import { addEntertainment, removeEntertainment } from '../../actions'

const mapStateToProps = (state: any, props: any) => ({
    entertainment: state.entertainment
})
    

const mapDispatchToProps = (disptach: any) => ({
    onAddEntertainment(text: string) {
        disptach(
            addEntertainment(text)
        )
    },
    onRemoveEntertainment(index: number) {
        disptach(
            removeEntertainment(index)
        )
    }
})
    

export default connect(mapStateToProps, mapDispatchToProps)(Entertainment)  
