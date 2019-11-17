
import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function SidebarItem({ label, items, depthStep = 10, depth = 0, ...rest }) {
    return (
      <>
        <ListItem button dense {...rest}>
          <ListItemText style={{ paddingLeft: depth * depthStep }}>
            <span>{label}</span>
          </ListItemText>
        </ListItem>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem) => (
              <SidebarItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </List>
        ) : null}
      </>
    )
  }
  
  function Sidebar({ items, depthStep, depth }) {
    return (
      <div className="sidebar">
        <List disablePadding dense>
          {items.map((sidebarItem, index) => (
            <SidebarItem
              key={`${sidebarItem.name}${index}`}
              depthStep={depthStep}
              depth={depth}
              {...sidebarItem}
            />
          ))}
        </List>
      </div>
    )
  }

    

// 4th
// <div className="sidebar">
//       <List disablePadding dense>
//         {items.map(({ label, name, items: subItems, ...rest }) => {
//           return (
//             <React.Fragment key={name}>
//               <ListItem style={{ paddingLeft: 18 }} button {...rest}>
//                 <ListItemText>{label}</ListItemText>
//               </ListItem>
//               {Array.isArray(subItems) ? (
//                 <List disablePadding dense>
//                   {subItems.map((subItem) => {
//                     return (
//                       <ListItem
//                         key={subItem.name}
//                         style={{ paddingLeft: 36 }}
//                         button
//                         dense
//                       >
//                         <ListItemText>
//                           <span className="sidebar-subitem-text">
//                             {subItem.label}
//                           </span>
//                         </ListItemText>
//                       </ListItem>
//                     )
//                   })}
//                 </List>
//               ) : null}
//             </React.Fragment>
//           )
//         })}
//       </List>
//     </div> 

    // 3rd
    // <div className="sidebar">
    //   <List disablePadding dense>
    //     {items.map(({ label, name, items: subItems, ...rest }) => (
    //       <React.Fragment key={name}>
    //         <ListItem style={{ paddingLeft: 18 }} button {...rest}>
    //           <ListItemText>{label}</ListItemText>
    //         </ListItem>
    //         {Array.isArray(subItems) ? (
    //           <List disablePadding>
    //             {subItems.map((subItem) => (
    //               <ListItem key={subItem.name} button>
    //                 <ListItemText className="sidebar-item-text">
    //                   {subItem.label}
    //                 </ListItemText>
    //               </ListItem>
    //             ))}
    //           </List>
    //         ) : null}
    //       </React.Fragment>
    //     ))}
    //   </List>
    // </div>

//second itteration
//     <div className="sidebar">
//     <List disablePadding dense>
//       {items.map(({ label, name, items: subItems, ...rest }) => (
//         <ListItem style={{ paddingLeft: 18 }} key={name} button {...rest}>
//           <ListItemText>{label}</ListItemText>
//           {Array.isArray(subItems) ? (
//             <List disablePadding>
//               {subItems.map((subItem) => (
//                 <ListItem key={subItem.name} button>
//                   <ListItemText className="sidebar-item-text">
//                     {subItem.label}
//                   </ListItemText>
//                 </ListItem>
//               ))}
//             </List>
//           ) : null}
//         </ListItem>
//       ))}
//     </List>
//   </div>

export default Sidebar