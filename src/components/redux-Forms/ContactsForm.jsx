import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";






let ContactForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>

            <Field name = 'status' component = 'input' type = 'text'/>
            <button type='submit' >save</button>
        </form>

)

};


ContactForm = reduxForm({
    form: 'ContactForm'
})(ContactForm);

 let mapStateToProps = () =>({

});
 let mapDispatchToProps = ()=>({

 });

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);