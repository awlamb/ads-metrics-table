import {Table, Column, Cell} from 'fixed-data-table';
import React from 'react';

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