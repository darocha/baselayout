import React, { Component } from 'react';
import { connect } from 'react-redux';

class Translate extends Component {


    render() {

        let { language, k } = this.props;
        let localeData = language.localeData;
        let lang = language.language;
        
        let dta = localeData[lang];
        // fallback to english
        if (!dta) {
            dta = localeData['en'];
        }

        let str = dta[k] || k;
        return (<span>{str}</span>);

    }

}


const mapStateToProps = (state) => ({
    ...state
}); 

export default connect(mapStateToProps)(Translate);
