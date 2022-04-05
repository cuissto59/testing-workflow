import PropTypes from "prop-types";
import clsx from "clsx"; 
import React from "react";
import Box from "../Box/Box";





const Button = ({type,size,LeftIcon,RightIcon,children,variant}) => {

    const showLeftIcon = !!LeftIcon;
    const showRightIcon = !!RightIcon;
 


    const iconClasses = clsx(
     
        {
          "h-4 w-4 ": size === "xs" || "sm" ,
          "h-5 w-5 ": size === "base" || "l" || "xl" 
          
        }
    );

    const sizeClasses = clsx(
        "font-medium",
        {
          "px-2.5 py-1.5 text-xs leading-4 rounded  ": size === "xs" ,
          "px-3 py-2 text-sm leading-4  rounded -md  ": size === "sm",
          "px-4 py-2  text-sm leading-5  rounded-md ": size === "base" ,
          "px-4 py-2 text-base leading-6  rounded-md ": size === "l" ,
          "px-6 py-3 text-base leading-6  rounded-md ": size === "xl" ,
        }
    );

 
    const buttonClasses = clsx(
      "inline-flex items-center  gap-2    focus:outline-none focus:ring-2 focus:ring-offset-2  ",
      {
        " text-indigo-600  hover:bg-gray-200  focus:ring-indigo-600": type === "primary" && variant ==="ghost",
        " hover:underline  text-indigo-600 focus:ring-indigo-600": type === "primary" && variant ==="link",
        " border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm": type === "primary" && variant==="solid",
        "border border-transparent  text-indigo-700 bg-indigo-100 hover:bg-indigo-200  focus:ring-indigo-500 shadow-sm": type === "secondary" && variant==="solid",
        " text-indigo-700 hover:underline  focus:ring-indigo-500": type === "secondary"  && variant ==="link",
        "text-indigo-600  hover:bg-indigo-100  focus:ring-indigo-500": type === "secondary" && variant ==="ghost",
        "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500 shadow-sm": type === "white" && variant==="solid",
        " text-gray-700  hover:underline focus:ring-indigo-500": type === "white" && variant ==="link",
        "text-gray-700  hover:bg-gray-200 focus:ring-indigo-500": type === "white" && variant ==="ghost",
       
      }
    );
  
  
    
    return <> 
  <button className={clsx(sizeClasses,buttonClasses)}>
    
    {
      showLeftIcon &&  <Box className={iconClasses}>{ LeftIcon }</Box>
    }
   
      {children}
    
    {
      showRightIcon && <Box className={iconClasses}> {RightIcon}</Box>
    }
  </button>
    
  </> 
  }
  
  Button.propTypes = {
    type :PropTypes.oneOf(['primary','white','secondary']),
    size :PropTypes.oneOf(['xs','sm','base','l','xl']),
    variant :PropTypes.oneOf(['solid','ghost','link']),
    
  };
  Button.defaultProps = {
    type : 'primary',
    size : 'base',
    variant : 'solid',
    children : 'Button text',
   
  };
  export default Button;
  