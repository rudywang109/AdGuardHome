import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import Card from '../ui/Card';

const Clients = props => (
    <Card title="Top clients" subtitle="in the last 3 minutes" bodyType="card-table" refresh={props.refreshButton}>
        <ReactTable
            data={map(props.topClients, (value, prop) => (
                { ip: prop, count: value }
            ))}
            columns={[{
                Header: 'IP',
                accessor: 'ip',
            }, {
                Header: 'Request count',
                accessor: 'count',
            }]}
            showPagination={false}
            noDataText="No clients found"
            minRows={6}
            className="-striped -highlight card-table-overflow"
        />
    </Card>
);

Clients.propTypes = {
    topClients: PropTypes.object.isRequired,
    refreshButton: PropTypes.node,
};

export default Clients;