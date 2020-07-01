import React from 'react';


class Soma extends React.Component {

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

        const somar = this.state.products.map((acumulado) => parseFloat(acumulado.total))
        const result = somar.reduce((soma, nota) => soma + nota, 0);

        const refund = this.state.products.filter(valor => valor.status === "refunded")
        const refundMap = refund.map(refundNumber => parseFloat(refundNumber.total))
        const refundResult = refundMap.reduce((first, second) => first + second ,0)

        const complet = this.state.products.filter(valor => valor.status === "completed")
        const completMap = complet.map(completNumber => parseFloat(completNumber.total))
        const completResult = completMap.reduce((first, second) => first + second ,0)

        const pending = this.state.products.filter(valor => valor.status === "pending")
        const pendingMap = pending.map(pendingNumber => parseFloat(pendingNumber.total))
        const pendingResult = pendingMap.reduce((first, second) => first + second ,0)

        const cancel = this.state.products.filter(valor => valor.status === "cancelled")
        const cancelMap = cancel.map(cancelNumber => parseFloat(cancelNumber.total))
        const cancelResult = cancelMap.reduce((first, second) => first + second ,0)

        const process = this.state.products.filter(valor => valor.status === "processing")
        const processMap = process.map(processNumber => parseFloat(processNumber.total))
        const processResult = processMap.reduce((first, second) => first + second ,0)

        
        return (
            <div>
                <ul>
                    <li><strong>VALOR TOTAL: R${result}</strong></li>
                    <li>QUANT. - CONCLUIDO: R${completResult}</li>
                    <li>QUANT. - PROCESSANDO: R${processResult}</li>
                    <li>QUANT. - PENDENTE: R${pendingResult}</li>
                    <li>QUANT. - CANCELADO: R${cancelResult}</li>
                    <li>QUANT. - REEMBOLSADO: R${refundResult}</li>
                </ul>
            </div>
        );
    }
}
export default Soma;
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