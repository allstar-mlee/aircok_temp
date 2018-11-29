import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#001c58",
        color: theme.palette.common.white,
        fontSize: '2rem',
        height : '80px',
        textAlign : 'center',
        padding : '0px',
    },
    numeric : {
        width : '12%',
        textAlign : 'center',
    }
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 2,
        overflowX: 'auto',
        
    },
    table: {
        minWidth: 700,
    }
});

function CustomizedTable(props) {
    const {classes} = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>구분</CustomTableCell>
                        <CustomTableCell numeric>초미세먼지<br/><div className="w3-medium w3-center">(PM2.5)</div></CustomTableCell>
                        <CustomTableCell numeric>미세먼지<br/><div className="w3-medium w3-center">(PM10)</div></CustomTableCell>
                        <CustomTableCell numeric>휘발성유기화합물<br/><div className="w3-medium w3-center">(VOCs)</div></CustomTableCell>
                        <CustomTableCell numeric>포름알데히드<br/><div className="w3-medium w3-center">(HCHO)</div></CustomTableCell>
                        <CustomTableCell numeric>이산화탄소<br/><div className="w3-medium w3-center">(C02)</div></CustomTableCell>
                        <CustomTableCell numeric>온도<br/><div className="w3-medium w3-center">(℃)</div></CustomTableCell>
                        <CustomTableCell numeric>습도<br/><div className="w3-medium w3-center">(%)</div></CustomTableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </Paper>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);