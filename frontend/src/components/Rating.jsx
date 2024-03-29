import React from "react";

const Rating = ({value, text}) => {
  
  const color = '#ff8d00';
  
  return(
    <div>
      <span>{value}</span>
      <span>
        <i style={{color}}
          className={
            value >= 1
            ? 'fa-solid fa-star'
            : value >= 0.5
            ? 'fa-solid fa-star-half-stroke'
            : 'fa-regular fa-star'
          }
          /> 
        </span>

        <span>
          <i style={{color}}
            className={
              value >= 2
              ? 'fa-solid fa-star'
              : value >= 1.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
            }
          >
          </i>
        </span>

         <span>
          <i style={{color}}
            className={
              value >= 3
              ? 'fa-solid fa-star'
              : value >= 2.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
            }
          >
          </i>
        </span>

        <span>
          <i style={{color}}
            className={
              value >= 4
              ? 'fa-solid fa-star'
              : value >= 3.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
            }
          >
          </i>
        </span>

        <span>
          <i style={{color}}
            className={
              value >= 5
              ? 'fa-solid fa-star'
              : value >= 4.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
            }
          >
          </i>
        </span>

        <span>{text && text}</span>


          
          
   

    </div>
  )
 
}

export default Rating;