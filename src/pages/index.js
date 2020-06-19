import React from 'react';
import '../pages/style.scss'

class Modulo extends React.Component {

    state = {
        products: []
    };

    componentDidMount() {
        fetch('https://grupovoll.com.br/cursos/wp-json/wc/v2/orders?consumer_key=ck_f9466a8e9c810380f732988207228cf3d554b2c0&consumer_secret=cs_a110ccf629c42d9b7b70fcb5a73d8978c71f9415')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res
                });
            });
    }
    render() {
        return (
            <div>
                <ul className="container">
                {this.state.products.map((item, index) => (
                        <li className="wrapper" key={index}>
                            <p>Nome: {item.billing.first_name} {item.billing.last_name}</p>
                            <p>Email: {item.billing.email}</p>
                            <p>Status do pedido: {item.status}</p>
                            {item.line_items.map((subitem, index) => (
                                <p key={index}>Produtos Comprados: {subitem.name} [{subitem.quantity}]</p>
                            ) )}
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}
export default Modulo;
//https://grupovoll.com.br/cursos/wp-json/wc/v2/orders?consumer_key=ck_f9466a8e9c810380f732988207228cf3d554b2c0&consumer_secret=cs_a110ccf629c42d9b7b70fcb5a73d8978c71f9415