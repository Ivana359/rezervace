
export const Detail = ({number, dates, person, child, services,price, checkin, checkout})=>{
    return(
<div className="summary__detail">
<h3>Detail rezervace</h3>
<div className="summary__number">Ćíslo: {number}</div>
<div className="summary__dates">Pobyt: {dates}</div>
<div className="summary__guests">Hosté: {person} dospělí, {child} dítě</div>
<div className="summary__services">Stravování: {services}</div>
<div className="summary__room-total">{price} Kč</div>
<div className="summary__check-in">Check-in: {checkin}</div>
<div className="summary__check-out">
  Check-out: {checkout}
</div>
</div>
    )
}