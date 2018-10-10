import { connect } from "react-redux";
import List from './list'

const mapStateToProps = (state) => {
    return {item: state}
}

export default connect (
    mapStateToProps
)(List)