export const Storno = ({textA, textB})=>{
        return(
            <div className="summary__cancel">
            <h3>Storno podmínky</h3>
            <div className="summary__cancel-text">
              <p>
                {textA}
                
              </p>
              <p>
                {textB}
                
              </p>
            </div>
          </div>
    )
}