import React from 'react'
import './style.scss'

class Curso extends React.Component {
    state = {
        orders: [],
        products: []
    };

    componentDidMount() {
        fetch('https://vollpilates.com.br/wp-json/wc/v1/products?filter[posts_per_page]=-1&consumer_key=ck_9dd3ba58c6c5120ceb1de771d08038055da2cb27&consumer_secret=cs_a0bb9ce335fe159a9f9c30c7ebe079ace00bb55e')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res
                });
            });
        fetch('https://vollpilates.com.br/wp-json/wc/v1/orders?consumer_key=ck_9dd3ba58c6c5120ceb1de771d08038055da2cb27&consumer_secret=cs_a0bb9ce335fe159a9f9c30c7ebe079ace00bb55e')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    orders: res
                });
            });
    }

    render() {
        const productsT = this.state.products
        const ordersT = this.state.orders

        const primeiro = productsT.map(nome => nome.price)
        const segundo = productsT.map(quantidades => quantidades.sale_price)

        const passar = parseFloat(primeiro)

        const conta = segundo * passar


        return (
            <>
                <div className="wrapper">
                    <table>
                        <thead>
                            <th>Nome do Curso</th>
                            <th>Quantidade Vendidos</th>
                        </thead>
                        <tbody>
                            <td>
                                {productsT.map(nome => (<tr>{nome.name}</tr>))}
                            </td>
                            <td>
                                {productsT.map(nome => (<tr>{nome.total_sales}</tr>))}
                            </td>
                        </tbody>
                    </table>
                </div>

            </>
        )
    }
}

export default Curso