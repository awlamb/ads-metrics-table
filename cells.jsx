var FixedDataTable = require('fixed-data-table');
var React = require('react');
const {Table, Column, Cell} = FixedDataTable;

const NameCell = ({rowIndex, data, col,ads}) => (
  <Cell>
    {ads.find(x => x.remote_id === data.rows[rowIndex][col]).name }
  </Cell>
);

const MetricCell = ({rowIndex, data, col}) => (
  <Cell >
    {data.rows[rowIndex][col]}
  </Cell>
);

module.exports = {NameCell,MetricCell}