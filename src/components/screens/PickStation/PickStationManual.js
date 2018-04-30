import BaseStation from '../BaseStation/BaseStation';
// import * as Api  from '../../../services/requestDataApi';

// static test data will be replaced with data from API
import stationData from './stationData.json';

// settings to set the main table columns 
// (we can eliminate this step by sending only the columns we want to display)
import stationSettings from './stationSettings.json';

class PickStationManual extends BaseStation {
    
    async componentDidMount() {

        // get data from API
        // let stationData = await Api.getData('/Api/BaggingStationData');

        this.setState({ StationTitle: 'GREEN Pick Station (Manual Label)' });
        this.setState({ apiUrl: '/api/PickStation' });
        this.setState({ dataPrimaryKey: 'ItemID' });
        this.setState({ data: stationData });
        this.setState({ stationSettings: stationSettings });
        this.setState({ detailComponent: null });
        this.setState({ expandField: null });

        // uncoment to use a custom detailComponent
        // this.setState({ detailComponent: CustomDetailComponent });

    }

}

export default PickStationManual;
