import React, { Component } from 'react';
import { Grid, GridColumn as Column, GridDetailRow } from '@progress/kendo-react-grid';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
// import * as Api  from '../../../services/requestDataApi';
// import stationSettings from './stationSettings.json';
// import stationData from './stationData.json';
import stationDetailsData from './stationDetailsData.json';

// eslint-disable-next-line
const apiUrl = '/api/BaggingStation';

export class DetailComponent extends GridDetailRow {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        };
    }

    handleTabSelect = (e) => {
        this.setState({ selectedTab: e.selected })
    }

    render() {

        return (

            <TabStrip selected={this.state.selectedTab} onSelect={this.handleTabSelect}>

                {this.props.dataItem && this.props.dataItem.details &&

                    Object.keys(this.props.dataItem.details).map((key, tabIndex) => {

                    console.log('tabs', key, this.props.dataItem.details[key]);

                             return <TabStripTab key={'tab_' + key} title={key}>

                                    <Grid data={this.props.dataItem.details[key]}>

                                        {
                                      
                                            this.props.dataItem.details[key][tabIndex] &&
                                            Object.keys(this.props.dataItem.details[key][tabIndex]).forEach((colKey, colIndex) => {
                                           
                                                console.log('col', colKey);
                                          
                                                return <Column
                                                    key={'detail_col_' + colIndex}
                                                    field={colKey}
                                                    title={colKey}
                                                    //width={col.Width ? col.Width : ''}
                                                />
                                            })
                                         
                                        }

                                     </Grid>

                                   </TabStripTab>

                    })
                }

            </TabStrip>
        );
    }
}

class BaseStation extends Component {

    constructor(props) {
        super(props);

        this.state = {

            apiUrl: null,
            dataPrimaryKey: null,
            data: [],
            stationSettings: null,
            stationTitle: 'Station Title',
            detailComponent: DetailComponent,
            expandField: "expanded"
        }
    }

    async componentDidMount() {

        // get data from API
        // let stationData = await Api.getData('/Api/BaggingStationData');
        
        // this.setState({ apiUrl: '/api/BaggingStation' });
        // this.setState({ dataPrimaryKey: 'ToteID' });
        // this.setState({ data: stationData });
        // this.setState({ stationSettings: stationSettings });
        // this.setState({ detailComponent: DetailComponent });
        
    }

    expandChange = (event) => {

        let dataItem = event.dataItem;
        dataItem.expanded = !dataItem.expanded;
        this.forceUpdate();
        if (!dataItem.expanded) {
            return;
        }
        
        // get detail data from api
        // let detailData = await Api.getData(ApiUrl + '/' + id);

        // get detail data from json file for now
        let detailData = stationDetailsData;

        // create a copy of gridData and store it in data variable
        let data = this.state.data.slice();

        // find item position on array
        let index = data.findIndex(d => d[this.state.dataPrimaryKey] === dataItem[this.state.dataPrimaryKey]);

        // set the details property with details data returned from api
        data[index].details = detailData;

        // update the state
        this.setState({ data: data });
        
    }  

    

    render() {

        return (
            <div className="screen">

                {this.state.stationSettings &&
                    <div>
                        <h3>{this.state.StationTitle}</h3>
                        <div className="mt-4 mb-4">
                            <Grid
                            style={{}}
                            data={this.state.data}
                            detail={this.state.detailComponent}
                            expandField="expanded"
                            expandChange={this.expandChange}
                            
                            >
                                {
                                    this.state.stationSettings &&
                                    this.state.stationSettings.MainColumns.map((col, i) => {

                                        return <Column
                                            key={'main_col_' + i}
                                            field={col.Name}
                                            title={col.Name}
                                            width={col.Width ? col.Width : ''} />
                                    })

                                }
                            </Grid>
                        </div>
                    </div>
                }
            </div>
          
        );
    }
}

export default BaseStation;

