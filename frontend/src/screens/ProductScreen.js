import React from 'react'

const ProductScreen = (props) => {
    return (
        <div>
            Product Screen {props.match.params.id}
        </div>
    )
}

export default ProductScreen
