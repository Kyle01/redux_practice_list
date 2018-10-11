import { connect } from "react-redux";
import {
  sendInformation,
  sendFirst,
  sendSecond,
  sendThird
} from "../actions/items_actions";
import List from './list'

const mapStateToProps = (state) => {
    return {sent: state.item}
};

const mapDispatchToProps = dispatch => ({
  send: item => dispatch(sendInformation(item)),
  sendFirst: item => dispatch(sendFirst(item)),
  sendSecond: item => dispatch(sendSecond(item)),
  sendThird: item => dispatch(sendThird(item))
});


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(List)