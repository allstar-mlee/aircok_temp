import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';



const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

const AlarmCircle = props => {
    if (props.alarm) {
      return (
        // <div
        //   className="w3-red rounded-circle mt-1 ml-2"
        //   style={{ width: "22px", height: "22px" }}
        // />
        <img src="assets/images/alarm.png" alt="alarm" title="alarm" />
      );
    }
    return null;
  };

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    };

    render() {
        const {classes, count, page, rowsPerPage, theme} = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    {theme.direction === 'rtl' ?
                        <i className="zmdi zmdi-skip-next"/> : <i className="zmdi zmdi-skip-previous"/>}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    {theme.direction === 'rtl' ?
                        <i className="zmdi zmdi-chevron-right"/> : <i className="zmdi zmdi-chevron-left"/>}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                >
                    {theme.direction === 'rtl' ?
                        <i className="zmdi zmdi-chevron-left"/> : <i className="zmdi zmdi-chevron-right"/>}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    {theme.direction === 'rtl' ?
                        <i className="zmdi zmdi-skip-previous"/> : <i className="zmdi zmdi-skip-next"/>}
                </IconButton>
            </div>
        );
    }
}

TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, {withTheme: true})(
    TablePaginationActions,
);

let counter = 0;

function createData(spot, location, floor, totalScore, pm25Standard, pm25Current, pm25Alarm, pm10Standard, pm10Current, pm10Alarm, vocsStandard, vocsCurrent, vocsAlarm, hchoStandard, hchoCurrent, hchoAlarm, co2Standard, co2Current, co2Alarm, tempStandard, tempCurrent, tempAlarm, humiStandard, humiCurrent, humiAlarm) {
    counter += 1;
    return {id: counter, spot, location, floor, totalScore, pm25Standard, pm25Current, pm25Alarm, pm10Standard, pm10Current, pm10Alarm,
        vocsStandard, vocsCurrent, vocsAlarm, hchoStandard, hchoCurrent, hchoAlarm, co2Standard, co2Current, co2Alarm, tempStandard, tempCurrent, tempAlarm,humiStandard, humiCurrent, humiAlarm};
}

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: '0px',
    },
    table: {
        minWidth: 50,
    }, 
    tableWrapper: {
        overflowX: 'auto',
    },
    numeric: {
        textAlign : 'center',
    },
});

class CustomTable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: [
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, true, 20, 30, false, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, true, 20, 30, false, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
            ],
            page: 0,
            rowsPerPage: 5,
        };
    }

    handleChangePage = (event, page) => {
        this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };

    render() {
        const {classes} = this.props;
        const {data, rowsPerPage, page} = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <table className="table table-hover">
                        <thead>
                            <tr className="text-center">
                            <th className="border-right" scope="col" width="5%">지점명</th>
                            <th className="border-right" scope="col" width="5%">관리처</th>
                            <th className="border-right" scope="col" width="3%">층</th>
                            <th className="border-right" scope="col" width="3%">지수</th>
                            <th scope="col" width="4%">기준</th>
                            <th scope="col" width="4%">현재</th>
                            <th className="border-right" scope="col" width="4%">알람</th>
                            <th scope="col" width="4%">기준</th>
                            <th scope="col" width="4%">현재</th>
                            <th className="border-right" scope="col" width="4%">알람</th>
                            <th scope="col" width="4%">기준</th>
                            <th scope="col" width="4%">현재</th>
                            <th className="border-right" scope="col" width="4%">알람</th>
                            <th scope="col" width="4%">기준</th>
                            <th scope="col" width="4%">현재</th>
                            <th className="border-right" scope="col" width="4%">알람</th>
                            <th scope="col" width="4%">기준</th>
                            <th scope="col" width="4%">현재</th>
                            <th className="border-right" scope="col" width="4%">알람</th>
                            <th scope="col" width="4%">기준</th>
                            <th scope="col" width="4%">현재</th>
                            <th className="border-right" scope="col" width="4%">알람</th>
                            <th scope="col" width="4%">기준</th>
                            <th scope="col" width="4%">현재</th>
                            <th className="border-right" scope="col" width="4%">알람</th>
                            </tr>
                        </thead>
                        <TableBody>
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell className="border-right">{n.spot}</TableCell>
                                        <TableCell className="border-right">{n.location}</TableCell>
                                        <TableCell className="border-right">{n.floor}</TableCell>
                                        <TableCell numeric className="border-right">{n.totalScore}</TableCell>
                                        <TableCell numeric>{n.pm25Standard}</TableCell>
                                        <TableCell numeric>{n.pm25Current}</TableCell>
                                        <TableCell className="border-right"><AlarmCircle alarm={n.pm25Alarm}/> </TableCell>
                                        <TableCell numeric>{n.pm10Standard}</TableCell>
                                        <TableCell numeric>{n.pm10Current}</TableCell>
                                        {/* <TableCell>{n.pm10Alarm}</TableCell> */}
                                        <TableCell className="border-right"><AlarmCircle alarm={n.pm10Alarm}/> </TableCell>
                                        <TableCell numeric>{n.vocsStandard}</TableCell>
                                        <TableCell numeric>{n.vocsCurrent}</TableCell>
                                        <TableCell className="border-right"><AlarmCircle alarm={n.vocsAlarm}/> </TableCell>
                                        <TableCell numeric>{n.hchoStandard}</TableCell>
                                        <TableCell numeric>{n.hchoCurrent}</TableCell>
                                        <TableCell className="border-right"><AlarmCircle alarm={n.hchoAlarm}/> </TableCell>
                                        <TableCell numeric>{n.co2Standard}</TableCell>
                                        <TableCell numeric>{n.co2Current}</TableCell>
                                        <TableCell className="border-right"><AlarmCircle alarm={n.co2Alarm}/> </TableCell>
                                        <TableCell>{n.tempStandard}</TableCell>
                                        <TableCell>{n.tempCurrent}</TableCell>
                                        <TableCell className="border-right"><AlarmCircle alarm={n.tempAlarm}/> </TableCell>
                                        <TableCell>{n.humiStandard}</TableCell>
                                        <TableCell>{n.humiCurrent}</TableCell>
                                        <TableCell className="border-right"><AlarmCircle alarm={n.humiAlarm}/> </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{height: 48 * emptyRows}}>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    colSpan={24}
                                    count={data.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActionsWrapped}
                                />
                            </TableRow>
                        </TableFooter>
                    </table>
                </div>
            </Paper>
        );
    }
}

CustomTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomTable);