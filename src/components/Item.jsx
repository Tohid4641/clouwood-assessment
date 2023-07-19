import '../App.css';

function Item(props) {
    return( 
    <div className="col-12 col-md-12 col-lg-12 mb-3">
        <div className="card h-100 border-0">
            <div className="card-img-top">
                <a href={props.url} className=" font-weight-bold text-dark text-uppercase small" target="_blank"><img className="listImage" src={props.imageUrl} alt="Card image cap" /></a>
            </div>
            <div className="card-body text-center">
                <h4 className="card-title">
                    <a href={props.url} className=" font-weight-bold text-dark text-uppercase small" target="_blank">{props.title}</a>
                </h4>
                <p>{props.desc}</p>
                <h5 className="card-price small text-warning">
                    <i>{props.author}</i>
                </h5>
            </div>
        </div>
    </div>
    )
}

export default Item;
