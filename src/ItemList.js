
import Lineitem from "./Lineitem"

export const ItemList = ({items,handleCheck,handleDelete}) => {
  return (
      <ul>
          {items.map((item)=>(
                <Lineitem
                 key={item.id}
                 item={item}
                 handleCheck={handleCheck}
                 handleDelete={handleDelete}
                />
           ))}
      </ul>
  )
}
