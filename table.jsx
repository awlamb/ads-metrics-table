import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';
import {NameCell, MetricCell} from './cells.jsx';

export default class AdsTable extends React.Component {
	constructor(props) {
		super(props);
		this.updateTableWidth = this.updateTableWidth.bind(this);
		this.state = {
			width: 0,
			height: 0
		};
	}
	componentDidMount() {
		this.updateTableWidth();
		window.addEventListener('resize', this.updateTableWidth);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateTableWidth);
	}

	updateTableWidth() {
		this.setState({ width: window.innerWidth });
	}
	render() {
		var dataList = this.props.metrics;
		var ads = this.props.ads;
		if(this.props.loaded) {
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
						{ dataList.column_names.map( (column) =>
							<Column
								header={<Cell>{column}</Cell>}
								cell={<MetricCell data={dataList} col={column} />}
								width={200}
							/>
						)}
				</Table>
			);
		} else {
			return (<span />
			)
		}
	}
}