import React from 'react';
import './style.scss'

class Tabela extends React.Component {

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
        const devolvidos = this.state.products.filter( devolvidos => devolvidos.status === "refunded" )
        const totalDevolvidos = devolvidos.length

        const concluido = this.state.products.filter( devolvidos => devolvidos.status === "completed" )
        const totalConcluidos = concluido.length

        const pendente = this.state.products.filter( devolvidos => devolvidos.status === "pending" )
        const totalPendente = pendente.length

        const cancelado = this.state.products.filter( cancelado => cancelado.status === "cancelled" )
        const totalCancelado = cancelado.length

        const processando = this.state.products.filter( processando => processando.status === "processing" )
        const totalProcessando = processando.length

           


        return (
            <div>
                <ul>
                    <li><strong>TOTAL DE PEDIDOS: {this.state.products.length}</strong></li>
                    <li>QUANT. - CONCLUIDO: {totalConcluidos}</li>
                    <li>QUANT. - PROCESSANDO: {totalProcessando}</li>
                    <li>QUANT. - PENDENTE: {totalPendente}</li>
                    <li>QUANT. - CANCELADO {totalCancelado}</li>
                    <li>QUANT. - REEMBOLSADO: {totalDevolvidos}</li>
                </ul>
            </div>
        );
    }
}
export default Tabela;
//https://grupovoll.com.br/cursos/wp-json/wc/v2/orders?consumer_key=ck_f9466a8e9c810380f732988207228cf3d554b2c0&consumer_secret=cs_a110ccf629c42d9b7b70fcb5a73d8978c71f9415

//QUANTIDADE DE PEDIDOS

/*TOTAL DE PEDIDOS:  xxx
PEDIDOS COM STATUS CONCLUIDO: xxxx
PEDIDOS COM STATUS PROCESSANDO: xxxx
PEDIDOS COM STATUS PAGAMENTO PENDENTE: xxxx
PEDIDOS COM STATUS CANCELADO: xxxx
PEDIDOS COM STATUS AGUARDANDO: xxx
PEDIDOS COM STATUS REEMBOLSADO: xxx


VALORES TOTAIS

TOTAL EM R$:  xxx
PEDIDOS COM STATUS CONCLUIDO R$: xxxx
PEDIDOS COM STATUS PROCESSANDO R$: xxxx
PEDIDOS COM STATUS PAGAMENTO PENDENTE R$: xxxx
PEDIDOS COM STATUS CANCELADO R$: xxxx
PEDIDOS COM STATUS AGUARDANDO R$: xxx
PEDIDOS COM STATUS REEMBOLSADO R$: xxx*/