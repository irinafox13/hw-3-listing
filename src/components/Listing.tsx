import type {ListingTypes, Items} from './ListingTypes'
import Item from './Item'

const Listing = (items: Items) => {
    return (
        <div className="item-list">
            {
            // eslint-disable-next-line array-callback-return
            items.items.map((item: ListingTypes) => {
                const title = item.title.substring(0, 50) + '...';
                return (
                    <Item 
                        key={item.listing_id}
                        listing_id={item.listing_id}
                        url={item.url}
                        MainImage={item.MainImage}
                        title={title}
                        currency_code={item.currency_code}
                        price={item.price}
                        quantity={item.quantity}
                    />
                )
            })}
        </div>   
    )
}

export default Listing