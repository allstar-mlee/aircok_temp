import React from 'react';
import { Table, Divider, Tag } from "antd";
import 'antd/dist/antd.css';


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

function createData(branchName, deviceName, totalIndex, pm25Standard, pm25Current, pm25Alarm, pm10Standard, pm10Current, pm10Alarm, vocsStandard, vocsCurrent, vocsAlarm, hchoStandard, hchoCurrent, hchoAlarm, co2Standard, co2Current, co2Alarm, tempStandard, tempCurrent, tempAlarm, humiStandard, humiCurrent, humiAlarm) {
    return {branchName, deviceName, totalIndex, pm25Standard, pm25Current, pm25Alarm, pm10Standard, pm10Current, pm10Alarm,
        vocsStandard, vocsCurrent, vocsAlarm, hchoStandard, hchoCurrent, hchoAlarm, co2Standard, co2Current, co2Alarm, tempStandard, tempCurrent, tempAlarm,humiStandard, humiCurrent, humiAlarm};
}

// const columns = [
//     {
//       title: "구분",
//       dataIndex: "branchName",
//       key: "branchName",
//       width: 200,
//       fixed: "left"
//     },
//     {
//       title: "측정기명",
//       dataIndex: "deviceName",
//       key: "deviceName",
//       width: 200,
//       fixed: "left",
//     },
//     {
//       title: "공기질관리지수",
//       dataIndex: "totalIndex",
//       key: "totalIndex",
//       width: 120,
//     //   render(text, record) {
//     //     return {
//     //       children: (
//     //         <Table
//     //           buildingType="type5"
//     //           pm10={record.PM10}
//     //           pm25={record.PM25}
//     //           voc={record.VOC}
//     //           hcho={record.HCHO}
//     //           co2={record.CO2}
//     //           temp={record.TEMPERATURE}
//     //           humidity={record.HUMIDITY}
//     //         />
//     //       )
//     //     };
//     //   }
//     }
//   ];


  const columns = [{
        title: '지점명',
        dataIndex: 'name',
        key: 'name',
        width: '5%',
    }, 
    {
        title: '관리처',
        dataIndex: 'street',
        key: 'street',
        width: '5%',
    },
    {
        title: '지수',
        dataIndex: 'age',
        key: 'age',
        width: '6%',
    },
  {
    title: "초미세먼지",
    children: [
        {
            title: '기준',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '현재',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '알람',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
    ]
  },
  {
    title: "미세먼지",
    children: [
        {
            title: '기준',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '현재',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '알람',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
    ]
  },
  {
    title: "휘발성 유기화합물",
    children: [
        {
            title: '기준',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '현재',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '알람',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
    ]
  },
  {
    title: "포름알데히드",
    children: [
        {
            title: '기준',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '현재',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '알람',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
    ]
  },
  {
    title: "이산화탄소",
    children: [
        {
            title: '기준',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '현재',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '알람',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
    ]
  },
  {
    title: "온도",
    children: [
        {
            title: '기준',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '현재',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '알람',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
    ]
  },
  {
    title: "습도",
    children: [
        {
            title: '기준',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '현재',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
        {
            title: '알람',
            dataIndex: 'number',
            key: 'number',
            width: '4%',
        },
    ]
  },
  ];

class TableContents extends React.Component {
    constructor(props, context) {
        super(props, context);

        let temp = [];
        for (let i = 0; i < 100; i++) {
        temp.push({
            key: i,
            name: 'Brown Test',
            age: i + 1,
            street: 'Park Temp',
            building: 'C',
            number: 2035,
            companyAddress: 'Lake Street 42',
            companyName: 'SoftLake Co',
            gender: 'M',
        });
        }

        this.state = {
            data: temp//[
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, true, 20, 30, false, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false),
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, true, 20, 30, false, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false),
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
                // createData('LGU+ 사옥', '대전무역회관', '5층', 70, 20, 30, true, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false, 20, 30, false),
            //],

        };
    }

    render() {
        const {data} = this.state;

        return (
            <div>
                <Table
                  columns={columns}
                  rowClassName={record => {
                    if (record.status === "false") {
                      return "disabled";
                    }
                    return null;
                  }}
                  dataSource={data}//{this.props.measureListExclude43}
                  bordered
                  size="middle"
                  style={{ whiteSpace: "pre" }}
                  scroll={{
                    x: '100%',//200 + 200 + 120 ,//+ 7 * 180,
                    y: 600
                  }}
                  pagination={false}
                  rowKey="deviceId"
                />
            </div>
        );
    }
}


export default TableContents;