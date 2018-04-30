import React from 'react';
import { Grid, GridColumn as Column, GridDetailRow, GridCell } from '@progress/kendo-react-grid';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

// eslint-disable-next-line
export default class DetailComponent extends GridDetailRow {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 0
        }
    }

    handleTabSelect = (e) => {
        this.setState({ selectedTab: e.selected })
    }

    render() {

        return (
            <TabStrip selected={this.state.selectedTab} onSelect={this.handleTabSelect}>
                <TabStripTab title="Order Items">
                    <Grid data={this.props.dataItem.details.orderDetails}>
                        <Column field="StockCode" title="Stock Code" width="120px" />
                        <Column field="SupplierDescription" title="Supplier Description" width="250px" />
                        <Column field="PackSize" title="Pack Size" />
                        <Column field="BatchNumber" title="Batch Number" />
                        <Column field="ExpirationDate" title="Expiration Date" />
                    </Grid>
                </TabStripTab>
                <TabStripTab title="Patient Info">
                    <Grid data={this.props.dataItem.details.patientDetails}>
                        <Column field="PatientID" title="Patient ID" width="120px" />
                        <Column field="FirstName" title="First Name" />
                        <Column field="LastName" title="Last Name" />
                    </Grid>
                </TabStripTab>
                <TabStripTab title="Location Details">
                    <Grid data={this.props.dataItem.details.locationDetails}>
                        <Column field="LastKnownLocation" title="Last Known Location" />
                        <Column field="ItemOrigin" title="Item Origin" />
                    </Grid>
                </TabStripTab>
            </TabStrip>
        );
    }
}

/* custom GridCell example
  
<Column field="Discontinued" title="Discontinued" width="120px" cell={CustomCell} />

*/

// eslint-disable-next-line
class CustomCell extends GridCell {
    render() {
        return (
            <td>
                <input disabled type="checkbox" checked={this.props.dataItem[this.props.field]} />
            </td>
        );
    }
}
