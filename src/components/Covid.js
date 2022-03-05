import {Component} from 'react';
import axios from "axios";

 export class Covid extends Component {
     constructor(props) {
         super(props);
         this.state = {
             covid: []
         }
     }

     componentDidMount() {
         axios.get("https://api.covid19api.com/summary")
             .then((res) => {
                 this.setState({
                     covid: res.data.Countries
                 })
             })
     }

     render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-bordered table-hover table-striped">
                                <thead>
                                <tr>
                                    <td>№</td>
                                    <td>Country</td>
                                    <td>Country Code</td>
                                    <td>total confirmed</td>
                                    <td>total deaths</td>
                                    <td>total recovered</td>
                                    <td>new confirmed</td>
                                    <td>new date</td>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.covid.map((item,index) =>{
                                    return(
                                        <tr>
                                            <td>{index +1}</td>
                                            <td>{item.Country}</td>
                                            <td>{item.CountryCode}</td>
                                            <td>{item.TotalConfirmed}</td>
                                            <td>{item.TotalDeaths}</td>
                                            <td>{item.TotalRecovered}</td>
                                            <td>{item.NewConfirmed}</td>
                                            <td>{item.Date}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

// import {Component} from 'react';
// import employee from "./employee.json"
//
// export class Covid extends Component {
//     render() {
//         const data = employee;
//         return (
//             <>
//                 <div className="container">
//                     <div className="row">
//                         {data.map((data) => {
//                             return(
//                                 <div className="col-4 mt-3">
//                                     <div className="card">
//                                         <div className="card-header">
//                                             {data.firstName} {data.lastName}
//                                         </div>
//                                         <div className="card-body">
//                                             <p>age: <b>{data.age}</b></p>
//                                             <p>salary: <b>{data.salary} $</b></p>
//                                             <p>position: <b>{data.position}</b></p>
//
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }