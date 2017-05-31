
"use strict";

var FixedDataTable = require('fixed-data-table');
var React = require('react');
var ReactDOM = require('react-dom');
const {Table, Column, Cell} = FixedDataTable;



const DateCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data.rows[rowIndex][col]}
  </Cell>
);

const ImageCell = ({rowIndex, data, col, ...props}) => (
  <ExampleImage
    src={data.rows[rowIndex][col]}
  />
);

const NameCell = ({rowIndex, data, col,ads, ...props}) => (
  <Cell {...props}>
    <a href="#">{ads.find(x => x.remote_id === data.rows[rowIndex][col]).name }</a>
  </Cell>
);

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data.rows[rowIndex][col]}
  </Cell>
);

class AdsTable extends React.Component {
  constructor(props) {
    super(props);
    {
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    var ads = 
    [
    	{
	      "id": 4,
	      "remote_id": "901",
	      "name": "901",
	      "status": "ACTIVE",
	    },
	    {
	      "id": 1,
	      "remote_id": "123",
	      "name": "123",
	      "status": "ACTIVE",
	    },
	    {
	      "id": 2,
	      "remote_id": "456",
	      "name": "456",
	      "status": "ACTIVE",
	    },
	    {
	      "id": 3,
	      "remote_id": "789",
	      "name": "789",
	      "status": "ACTIVE",
	    },
	];
	var metrics = 
	{
		"column_names": [
			"impressions",
			"reach",
			"frequency",
			"cpm",
			"spend",
			"ctr",
			"cost_per_inline_link_click",
			"actions:goal",
			"actions:link_click",
			"cost_per_action_type:cost_per_goal",
			"actions:offsite_conversion"
		],
		"rows": [
			{
			"remote_id": "456",
			"impressions": "123",
			"reach": 123,
			"frequency": 1.0413449389302,
			"cpm": 12.30131445905,
			"spend": 182.49,
			"ctr": 0.87630603303,
			"cost_per_inline_link_click": 3.0415,
			"actions:goal": 3,
			"actions:link_click": 60,
			"cost_per_action_type:cost_per_goal": 60.83,
			"actions:offsite_conversion": 456
			},
			{
			"remote_id": "123",
			"impressions": "123",
			"reach": 123,
			"frequency": 1.0413449389302,
			"cpm": 12.30131445905,
			"spend": 182.49,
			"ctr": 0.87630603303,
			"cost_per_inline_link_click": 3.0415,
			"actions:goal": 3,
			"actions:link_click": 60,
			"cost_per_action_type:cost_per_goal": 60.83,
			"actions:offsite_conversion": 123
			},
			{
			"remote_id": "901",
			"impressions": "123",
			"reach": 123,
			"frequency": 1.0413449389302,
			"cpm": 12.30131445905,
			"spend": 182.49,
			"ctr": 0.87630603303,
			"cost_per_inline_link_click": 3.0415,
			"actions:goal": 3,
			"actions:link_click": 60,
			"cost_per_action_type:cost_per_goal": 60.83,
			"actions:offsite_conversion": 901
			},
			{
			"remote_id": "789",
			"impressions": "123",
			"reach": 123,
			"frequency": 1.0413449389302,
			"cpm": 12.30131445905,
			"spend": 182.49,
			"ctr": 0.87630603303,
			"cost_per_inline_link_click": 3.0415,
			"actions:goal": 3,
			"actions:link_click": 60,
			"cost_per_action_type:cost_per_goal": 60.83,
			"actions:offsite_conversion": 789
			}
		]
		}
	};
    this.state = {
      dataList: metrics,
      ads: ads,
      width: 0,
      height: 0

    };
  }
componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}
componentWillMount() {

}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}
  render() {
    var {dataList,ads} = this.state;
    return (
      <Table
        rowHeight={50}
        headerHeight={50}
        rowsCount={dataList.rows.length}
        width={this.state.width}
        minWidth={500}
        height={500}
        {...this.props}>
        <Column
          header={<Cell>Ad Name</Cell>}
          cell={<NameCell data={dataList} col="remote_id" ads={ads} />}
          fixed={true}
          width={100}
        />
        {dataList.column_names.map( (column) =>
	        <Column
	          header={<Cell>{column}</Cell>}
	          cell={<TextCell data={dataList} col={column} />}
	          width={200}
	        />
        )
    	}

      </Table>
    );
  }
}

ReactDOM.render(<AdsTable />,document.getElementById("root"));