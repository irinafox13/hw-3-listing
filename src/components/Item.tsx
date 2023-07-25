import type { ListingTypes } from './ListingTypes';

const Item = (item: ListingTypes ) => {
    return (
        <div className="item" data-id={item.listing_id}>
            <div className="item-image">
            <a href={item.url}>
                <img src={item.MainImage?.url_570xN}/>
            </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title}</p>
                {item.currency_code === "GBP" && (
                    <p className="item-price">{item.price} {item.currency_code}</p>
                )}
                {item.currency_code !== "GBP" && (
                    <p className="item-price">{item.currency_code}{item.price}</p>
                )}
                <p className={`item-quantity ${item.quantity <= 10?"level-low":item.quantity >= 20?"level-medium": "level-high"}`}>{item.quantity} left</p>
            </div>
        </div>
    )
}
  
export default Item