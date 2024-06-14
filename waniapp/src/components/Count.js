import { connect } from "react-redux";

const Count = ({data}) => {
    return (
        <h1>Count: {data.length}</h1>
    )
};

const mapStateToProps = state => ({
    data: state.data
})
export default connect(mapStateToProps, null)(Count);