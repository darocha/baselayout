import React, { Component } from 'react';

class PVStation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tableData: [],
            selectedItemId: ''
        };
    }



    async componentDidMount() {

        let items = await this.getItems();

        this.setState({tableData: items});
    }

    rowClick = (item, event) => {

        console.log(item);

        this.setState({selectedItemId:item.ItemID});
    }

    getItems = async () => {

        return [
            { ItemID: "X00V7GG", Description: "ASPIRIN SOLUBLE 81MG TABS", Qty: "12", PackSize: "20", Batch: "0045402", Expiration: "01/ 01 / 2019", Location: "01, 06, 12, 10" },
            { ItemID: "7181956", Description: "ENALAPRIL 5MG TABS", Qty: "22", PackSize: "20", Batch: "1525552", Expiration: "01/ 01 / 2019", Location: "01, 10, 19, 13" },
            { ItemID: "K090907", Description: "SIMVASTATIN 10MG 28 TABS", Qty: "3", PackSize: "20", Batch: "4141455", Expiration: "01/ 01 / 2019", Location: "01, 05, 03, 03" },
            { ItemID: "5904580", Description: "TENO/EMTR/EFA 300/200/600 TABS", Qty: "8", PackSize: "20", Batch: "1002345", Expiration: "01/ 01 / 2019", Location: "01, 01, 06, 06" },
            { ItemID: "7181957", Description: "ENALAPRIL 5MG TABS", Qty: "22", PackSize: "20", Batch: "1525552", Expiration: "01/ 01 / 2019", Location: "01, 10, 19, 13" },
            { ItemID: "K090906", Description: "SIMVASTATIN 10MG 28 TABS", Qty: "3", PackSize: "20", Batch: "4141455", Expiration: "01/ 01 / 2019", Location: "01, 05, 03, 03" },
            { ItemID: "5904582", Description: "TENO/EMTR/EFA 300/200/600 TABS", Qty: "8", PackSize: "20", Batch: "1002345", Expiration: "01/ 01 / 2019", Location: "01, 01, 06, 06" },
            { ItemID: "X00V7GR", Description: "ASPIRIN SOLUBLE 300MG TABS", Qty: "12", PackSize: "20", Batch: "0045402", Expiration: "01/ 01 / 2019", Location: "01, 06, 12, 10" },
            { ItemID: "X00V7G3", Description: "ASPIRIN SOLUBLE 300MG TABS", Qty: "12", PackSize: "20", Batch: "0045402", Expiration: "01/ 01 / 2019", Location: "01, 06, 12, 10" },
            { ItemID: "X00V7G2", Description: "ASPIRIN SOLUBLE 300MG TABS", Qty: "12", PackSize: "20", Batch: "0045402", Expiration: "01/ 01 / 2019", Location: "01, 06, 12, 10" },
        ];
    }


  render() {

    return (
        <div className="screen">

            <div className="row">

                    <div className="col-sm-4">
                   
                         <img className="img-fluid" src="/images/imgo.jpg" alt="" />
                    
                    </div>
             

                    <div className="col-sm-8">

                        <div className="media">
                            <img className="mr-4 mb-4" src="/images/download.jpg" alt="" />
                                <div className="media-body">
                                    <h1>ASPIRIN SOLUBLE 300MG TABS</h1>
                                    <div>
                                        <label>First</label>: <span>Nomalga</span>
                                    </div>
                                    <div>
                                        <label>Last</label>: <span>Tsartis</span>
                                    </div>
                                </div>    
                        </div>
                
                        <table className="table table-striped table-hover text-center">
                            <thead>
                                <tr>
                                    <th scope="col">ItemID</th>
                                    <th scope="col">Qty</th>
                                    <th className="text-left" scope="col">Description</th>
                                    <th scope="col">PackSize</th>
                                    <th scope="col">Batch</th>
                                    <th>Location</th>
                                    <th>Expiration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tableData.map((item) => {
                                    return (
                                        <tr key={item.ItemID} onClick={(event) => this.rowClick(item, event)} className={item.ItemID === this.state.selectedItemId ? "table-primary" : ""}>
                                            <td>{item.ItemID}</td>
                                            <td>{item.Qty}</td>
                                            <td className="text-left">{item.Description}</td>
                                            <td>{item.PackSize}</td>
                                            <td>{item.Batch}</td>
                                            <td>{item.Location}</td>
                                            <td>{item.Expiration}</td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </table>


                    </div>

             </div>             

        </div>

    );

  }

}

export default PVStation;

