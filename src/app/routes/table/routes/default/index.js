import React from 'react';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';
import CustomTable from './Components/CustomTable';
import CustomizedTable from './Components/CustomizedTable';
import TableHeader from './Components/TableHeader';
import TableContents from './Components/TableContents';

const DefaultTable = () => {
    return (
        
        <div className="w3-row manager-site">
            <TableHeader />
            <TableContents />
        </div>


    );
};

export default DefaultTable;

