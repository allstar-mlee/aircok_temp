import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';


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

const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

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


class TableContents extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: [
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, true, 20, 30, false, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, true, 20, 30, false, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
            ],
            page: 0,
            rowsPerPage: 15,
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
            <div>
                <table className="w3-table table-hover table-condensed">
                    <thead style={{fontSize:"1.5rem"}}>
                        <tr className="border-bottom" style={{display: "flex"}}>
                        <th className="border-right w3-border-left w3-center" style={{width:"5%", paddingLeft: "8px"}}>지점명</th>
                        <th className="border-right w3-center" style={{width:"5%"}}>관리처</th>
                        <th className="border-right w3-center" style={{width:"3%"}}>층</th>
                        <th className="border-right w3-center" style={{width:"3%"}}>지수</th>
                        <th className="w3-center" style={{width:"4%"}}>기준</th>
                        <th className="w3-center" style={{width:"4%"}}>현재</th>
                        <th className="border-right w3-center" style={{width:"4%"}}>알람</th>
                        <th className="w3-center" style={{width:"4%"}}>기준</th>
                        <th className="w3-center" style={{width:"4%"}}>현재</th>
                        <th className="border-right w3-center" style={{width:"4%"}}>알람</th>
                        <th className="w3-center" style={{width:"4%"}}>기준</th>
                        <th className="w3-center" style={{width:"4%"}}>현재</th>
                        <th className="border-right w3-center" style={{width:"4%"}}>알람</th>
                        <th className="w3-center" style={{width:"4%"}}>기준</th>
                        <th className="w3-center" style={{width:"4%"}}>현재</th>
                        <th className="border-right w3-center" style={{width:"4%"}}>알람</th>
                        <th className="w3-center" style={{width:"4%"}}>기준</th>
                        <th className="w3-center" style={{width:"4%"}}>현재</th>
                        <th className="border-right w3-center" style={{width:"4%"}}>알람</th>
                        <th className="w3-center" style={{width:"4%"}}>기준</th>
                        <th className="w3-center" style={{width:"4%"}}>현재</th>
                        <th className="border-right w3-center" style={{width:"4%"}}>알람</th>
                        <th className="w3-center" style={{width:"4%"}}>기준</th>
                        <th className="w3-center" style={{width:"4%"}}>현재</th>
                        <th className="border-right w3-center" style={{width:"4%"}}>알람</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:"1.3rem", display:"block", overflow:'auto', height:"700px"}}>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                            return (
                                <tr key={n.id}>
                                    <td className="border-left border-right w3-center" style={{width:"5%", paddingLeft: "8px"}}>{n.spot}</td>
                                    <td className="border-right w3-center" style={{width:"5%"}}>{n.location}</td>
                                    <td className="border-right w3-center" style={{width:"3%"}}>{n.floor}</td>
                                    <td className="border-right w3-center" style={{width:"3%"}}>{n.totalScore}</td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.pm25Standard}</td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.pm25Current}</td>
                                    <td className="border-right w3-center" style={{width:"4%"}}><AlarmCircle alarm={n.pm25Alarm}/> </td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.pm10Standard}</td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.pm10Current}</td>
                                    <td className="border-right w3-center" style={{width:"4%"}}><AlarmCircle alarm={n.pm10Alarm}/> </td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.vocsStandard}</td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.vocsCurrent}</td>
                                    <td className="border-right w3-center" style={{width:"4%"}}><AlarmCircle alarm={n.vocsAlarm}/> </td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.hchoStandard}</td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.hchoCurrent}</td>
                                    <td className="border-right w3-center" style={{width:"4%"}}><AlarmCircle alarm={n.hchoAlarm}/> </td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.co2Standard}</td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.co2Current}</td>
                                    <td className="border-right w3-center" style={{width:"4%"}}><AlarmCircle alarm={n.co2Alarm}/> </td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.tempStandard}</td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.tempCurrent}</td>
                                    <td className="border-right w3-center" style={{width:"4%"}}><AlarmCircle alarm={n.tempAlarm}/> </td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.humiStandard}</td>
                                    <td className="w3-center" style={{width:"4%"}}>{n.humiCurrent}</td>
                                    <td className="border-right w3-center" style={{width:"4%"}}><AlarmCircle alarm={n.humiAlarm}/> </td>
                                </tr>
                            );
                        })}
                        {emptyRows > 0 && (
                            <tr style={{height: 48 * emptyRows}}>
                                <td colSpan={6}/>
                            </tr>
                        )}
                    </tbody>
                    {/* <TableFooter>
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
                    </TableFooter> */}
                </table>
            </div>
        );
    }
}


export default TableContents;