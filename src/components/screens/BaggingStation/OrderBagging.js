import BaseStation from '../BaseStation/BaseStation';
// import * as Api  from '../../../services/requestDataApi';

// static test data will be replaced with data from API
import stationData from './stationData.json';

// settings to set the main table columns 
// (we can eliminate this step by sending only the columns we want to display)
import stationSettings from './stationSettings.json';

// eslint-disable-next-line
const apiUrl = '/api/BaggingStation/OrderBagging';

class OrderBaggingStation extends BaseStation {

    async componentDidMount() {

        // get data from API
        // let stationData = await Api.getData('/Api/BaggingStation/Order');

        this.setState({ StationTitle: 'Order Bagging' });
        this.setState({ apiUrl: apiUrl });
        this.setState({ dataPrimaryKey: 'ToteID' });
        this.setState({ data: stationData });
        this.setState({ stationSettings: stationSettings });

        // uncoment to use a custom detailComponent
        // this.setState({ detailComponent: CustomDetailComponent });

    }

}

export default OrderBaggingStation;
