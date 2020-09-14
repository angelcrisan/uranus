// import { ReactComponent } from "*.svg";
// import React from "react";

// export class CustomDropDown extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//           listOpen: false,
//           headerTitle: this.props.title,
//           location: [
//             {
//                 id: 0,
//                 title: 'Home Page',
//                 selected: false,
//                 key: 'location'
//             },
//             {
//               id: 1,
//               title: 'Dublin',
//               selected: false,
//               key: 'location'
//             },
//             {
//               id: 2,
//               title: 'California',
//               selected: false,
//               key: 'location'
//             },
//             {
//               id: 3,
//               title: 'Istanbul',
//               selected: false,
//               key: 'location'
//             },
//             {
//               id: 4,
//               title: 'Izmir',
//               selected: false,
//               key: 'location'
//             },
//             {
//               id: 5,
//               title: 'Oslo',
//               selected: false,
//               key: 'location'
//             }
//           ]
//         }
//       }
          
//       handleClickOutside(){
//         this.setState({
//           listOpen: false
//         })
//       }
//       toggleList(){
//         this.setState(prevState => ({
//           listOpen: !prevState.listOpen
//         }))
//       }
//       render(){
//         const{list} = this.props
//         const{listOpen, headerTitle} = this.state
//         return(
//           <div className="dd-wrapper">
//       <div className="dd-header" onClick={() => this.toggleList()}>
//               <div className="dd-header-title">{headerTitle}</div>
//               {listOpen
//                 ? <FontAwesome name="angle-up" size="2x"/>
//                 : <FontAwesome name="angle-down" size="2x"/>
//               }
//           </div>
//       {listOpen && <ul className="dd-list">
//              {list.map((item) => (
//                <li className="dd-list-item" key={item.id} >{item.title}</li>
//               ))}
//             </ul>}
//           </div>
//         )
//       }
// };

