import "./productcard.css"
import LeftImg from "../../assets/left-img.jpg"


const ProductCard = ({avatar, cardLabel, cardTitle, cardDescription, showAlert}) => {

    return (
        <div className="card-container">
            <div onClick={showAlert} className="avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="card-left">
              

            </div>
            <div className="card-right">
                <div className="card-right-content">
                    <div className="card-content-label">
                       {cardLabel}
                    </div>
                    <h2 className="card-content-title">
                        {cardTitle}
                    </h2>
                    <p className="card-desc">
                        {cardDescription}
                    </p>

                </div>
            </div>
            

        </div>
    )

}




export default ProductCard