import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';
import AdsTable from './table.jsx';
import axios from 'axios';

class TableContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ads: [],
			metrics: {},
			loaded: false
		}	
	}
	fetchData() {
		return new Promise( (res,rej) => {
			var ads = axios.get('/ads');
			var metrics = axios.get('/metrics');
			Promise.all([ads,metrics]).then( (data) => {
				res(data);
			}).catch( (err) => {
				rej(err);
			});
		})
	}
	componentDidMount() {

		this.fetchData().then( (data) => {
			this.setState({
				ads: data[0].data,
				metrics: data[1].data,
				loaded: true
			})
		})
	}
	render() {
		return(
			<AdsTable loaded={this.state.loaded} ads={this.state.ads} metrics={this.state.metrics} />
		)
	}
}
ReactDOM.render(<TableContainer />,document.getElementById("root"));