import React from "react";

const EquityTable = () => {
  const data = [
    {
      name: "Focused",
      ytd: "-1.7%",
      d1: "0.1%",
      w1: "2.9%",
      m1: "7.6%",
      m3: "2.2%",
      m6: "10.1%",
      y1: "43.5%",
      y3: "23.9%",
      si: "22.5%",
      dd: "-2.8%",
      maxdd: "-40.3%",
    },
    {
      name: "NIFTY50",
      ytd: "3.1%",
      d1: "0.1%",
      w1: "1.1%",
      m1: "1.4%",
      m3: "4.4%",
      m6: "16.2%",
      y1: "26.2%",
      y3: "16.0%",
      si: "14.5%",
      dd: "-1.5%",
      maxdd: "-38.4%",
    },
  ];

  return (
     <div className="d-flex justify-content-between ">
                    <div className="">
        <table className="text-muted " style={{fontSize : '12px' }}>
        <thead>
          <tr className="" style={{backgroundColor :'#F2F2F2'}}>
            <th className="py-2 px-4 text-left font-medium">NAME</th>
            <th className="py-2 px-4 text-center font-medium">YTD</th>
            <th className="py-2 px-4 text-center font-medium">1D</th>
            <th className="py-2 px-4 text-center font-medium">1W</th>
            <th className="py-2 px-4 text-center font-medium">1M</th>
            <th className="py-2 px-4 text-center font-medium">3M</th>
            <th className="py-2 px-4 text-center font-medium">6M</th>
            <th className="py-2 px-4 text-center font-medium">1Y</th>
            <th className="py-2 px-4 text-center font-medium">3Y</th>
            <th className="py-2 px-4 text-center font-medium">SI</th>
            <th className="py-2 px-4 text-center font-medium " style={{borderLeft :'1px solid #c1cbceff'}}>DD</th>
            <th className="py-2 px-4 text-center font-medium">MAXDD</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {data.map((row, index) => (
            <tr key={index} className="border-t border-gray-200 hover:bg-gray-50 transition-colors" style={{borderTop :'1px solid #DCDEE0'}}>
              <td className="py-2 px-4 font-medium text-gray-800">{row.name}</td>
              <td className="py-2 px-4 text-center">{row.ytd}</td>
              <td className="py-2 px-4 text-center">{row.d1}</td>
              <td className="py-2 px-4 text-center">{row.w1}</td>
              <td className="py-2 px-4 text-center">{row.m1}</td>
              <td className="py-2 px-4 text-center">{row.m3}</td>
              <td className="py-2 px-4 text-center">{row.m6}</td>
              <td className="py-2 px-4 text-center">{row.y1}</td>
              <td className="py-2 px-4 text-center">{row.y3}</td>
              <td className="py-2 px-4 text-center">{row.si}</td>
              <td className="py-2 px-4 text-center border-l border-gray-300"  style={{borderLeft :'1px solid #c1cbceff'}}>{row.dd}</td>
              <td className="py-2 px-4 text-center">{row.maxdd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default EquityTable;
