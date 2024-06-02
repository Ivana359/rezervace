export const Hlavicka = ({rating})=>{
    return(
<div className="summary__head">
          <img
            className="summary__photo"
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960"
          />
          <div className="summary__head-property">
            <h3 className="summary__name">Hotel Lesní Zátiší</h3>
            <div className="summary__adress">Malohradské skály 347/21</div>
            <div className="summary__city">Malohradská ves</div>
            <div className="summary__rating">⭐ {rating}</div>
          </div>
          </div>
          )
        }
      