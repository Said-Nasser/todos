import Work from '../UI/Work'
import { connect } from 'react-redux'
import { addWork, removeWork } from '../../actions'

const mapStateToProps = (state: any, props: any) => ({
    work: state.work
})


const mapDispatchToProps = (disptach: any) => ({
    onAddWork(text: string) {
        disptach(
            addWork(text)
        )
    },
    onRemoveWork(index: number) {
        disptach(
            removeWork(index)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Work)  
