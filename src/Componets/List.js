



export default function List({category,products}) {
    
    
    return (
        <div>
            <h2>{category}</h2>
          <ul className= "w-50 m-auto">
              {
                  products.map(({id,products,brand,modelo,price})=>
                    { 
                    return <li key={id} className="list-group-item list-group-item-success">
                    {id} &nbsp; {products}&nbsp;{brand}&nbsp;{modelo}&nbsp; Price:{price}
                    </li>
                    })
              }
              </ul>  

        </div>
    )
}
