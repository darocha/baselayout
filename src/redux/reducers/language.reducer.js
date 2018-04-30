//import { language, locale } from '../../utils/languagedetector';
import enData from '../../components/translate/translations/en.json';
import ptData from '../../components/translate/translations/pt.json';

const INITIAL_STATE = {
    language: 'en',
    locale: 'en-US',
    localeData: { en: enData, pt: ptData }    
};
    
function languageReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'CHANGE_LANGUAGE': {
            return {
                lang: action.language
            }
        }
        default: return state;
    }
}
  
export default languageReducer;
