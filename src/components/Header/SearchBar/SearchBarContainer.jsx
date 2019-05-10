import { connect } from 'react-redux'
import SearchBar from "./SearchBar";





const mapStateToProps = (state)=> {
    return {

    }
};
const mapDispatchToProps =(dispatch)=> {
    return{
        // updateData(config) {
        //     dispatch(setState(config))
        // }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);