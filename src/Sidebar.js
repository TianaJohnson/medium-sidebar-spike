  
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";

function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, items, Icon, onClick: onClickProp } = item;

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className={
          "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
        }
      />
    ) : (
      <ExpandMoreIcon className="sidebar-item-expand-arrow" />
    );
  }

  return (
    <>
      <ListItem
        className="sidebar-item"
        onClick={onClick}
        button
        dense
        {...rest}
      >
        <div
          style={{ paddingLeft: depth * depthStep }}
          className="sidebar-item-content"
        >
          {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
          <div className="sidebar-item-text">{label}</div>
        </div>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem === "divider" ? (
                  <Divider style={{ margin: "6px 0" }} />
                ) : (
                  <SidebarItem
                    depth={depth + 1}
                    depthStep={depthStep}
                    item={subItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
}

function Sidebar({ items, depthStep, depth, expanded }) {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === "divider" ? (
              <Divider style={{ margin: "6px 0" }} />
            ) : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;


//5th
// import React from 'react'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'

// function SidebarItem({ label, items, depthStep = 10, depth = 0, ...rest }) {
//     return (
//       <>
//         <ListItem button dense {...rest}>
//           <ListItemText style={{ paddingLeft: depth * depthStep }}>
//             <span>{label}</span>
//           </ListItemText>
//         </ListItem>
//         {Array.isArray(items) ? (
//           <List disablePadding dense>
//             {items.map((subItem) => (
//               <SidebarItem
//                 key={subItem.name}
//                 depth={depth + 1}
//                 depthStep={depthStep}
//                 {...subItem}
//               />
//             ))}
//           </List>
//         ) : null}
//       </>
//     )
//   }
  
//   function Sidebar({ items, depthStep, depth }) {
//     return (
//       <div className="sidebar">
//         <List disablePadding dense>
//           {items.map((sidebarItem, index) => (
//             <SidebarItem
//               key={`${sidebarItem.name}${index}`}
//               depthStep={depthStep}
//               depth={depth}
//               {...sidebarItem}
//             />
//           ))}
//         </List>
//       </div>
//     )
//   }

    

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

//export default Sidebar