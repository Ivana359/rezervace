export const Pokoj = ({name, type, price})=>{
    return(
<div className="summary__head-room">
<h3 className="summary__name">Pokoj {name}</h3>
<div className="summary__room-type">
  {type}
</div>
<div className="summary__room-price">{price} Kč / noc</div>
</div>

)
}