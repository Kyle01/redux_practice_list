import { connect } from "react-redux";
import { sendInformation } from '../actions/items_actions';
import List from './list'

const mapStateToProps = (state) => {
    return {sent: state}
};

const mapDispatchToProps = dispatch => ({
  send: (item) => dispatch(sendInformation(item))
});


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(List)