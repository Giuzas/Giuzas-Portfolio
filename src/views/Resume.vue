<template>
    <div class="portfolio">
        <header>
            <h1>Presentazione</h1>
        </header>
        <main>
            <section id="about">
                <h2 style="color: orange">Chi Sono</h2>
                <p>
                    Mi chiamo {{ tuoNome }} ho {{ anni }} anni e sono uno sviluppatore software con una
                    forte passione per le tecnologie moderne e innovative. La mia avventura
                    nel mondo della programmazione è iniziata grazie a un caro amico che
                    mi ha ispirato e guidato, trasmettendomi il suo entusiasmo e le sue
                    conoscenze. Grazie al suo supporto, ho scoperto il mio amore per lo
                    sviluppo software e ho deciso di intraprendere questa carriera con
                    dedizione e impegno.
                </p>
            </section>
            <section id="work">
                <h2 style="color: orange">Cosa Faccio</h2>
                <p>
                    Attualmente, lavoro presso {{ nomeAzienda }} dove mi occupo dello
                    sviluppo e della manutenzione di soluzioni software avanzate per la
                    centralizzazione dei dati. Il mio lavoro si concentra sulla raccolta e
                    sullo smistamento di informazioni utilizzando tecnologie all'avanguardia
                    come:
                </p>
                <ul>
                    <li>
                        <strong>Message Queuing:</strong> RabbitMQ
                    </li>
                    <li>
                        <strong>Restful Services:</strong> NodeJS + Express
                    </li>
                    <li>
                        <strong>Database NoSQL:</strong> MongoDB
                    </li>
                </ul>
                <p>
                    L'applicazione su cui lavoro è progettata con un'architettura a
                    microservizi, distribuita attraverso Kubernetes. Utilizzo principalmente
                    il linguaggio Typescript per sviluppare soluzioni robuste e scalabili.
                    Inoltre, per rendere i dati facilmente accessibili, ho contribuito allo sviluppo di una
                    Single Page Application (SPA) utilizzando Vue.js.
                </p>
            </section>
            <section id="skills">
                <h2 style="color: orange">Competenze</h2>
                <ul>
                    <li>
                        <strong>Linguaggi di Programmazione:</strong> Typescript, JavaScript
                    </li>
                    <li>
                        <strong>Frameworks e Librerie:</strong> NodeJS, Express, Vue.js
                    </li>
                    <li>
                        <strong>Database:</strong> MongoDB, NoSQL
                    </li>
                    <li>
                        <strong>Architettura:</strong> Microservizi
                    </li>
                    <li>
                        <strong>Tecnologie di Messaging:</strong> RabbitMQ
                    </li>
                </ul>
            </section>
        </main>
        <footer>
            <p>
                Grazie per aver visitato il mio portfolio. Se sei interessato a
                collaborare o vuoi saperne di più su di me e sul mio lavoro, non esitare
                a contattarmi!
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Resume',
    data() {
        return {
            anni: new Date().getFullYear() - 1997,
            tuoNome: "Giuseppe Nappo",
            nomeAzienda: 'Sipos S.r.l'
        };
    }
};
</script>

<style scoped>
.portfolio {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    font-size: 28px;
    color: #333;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
}

h2 {
    font-size: 24px;
    color: #333;
    margin-top: 20px;
}

p {
    font-size: 16px;
    color: #666;
}

ul {
    margin-bottom: 20px;
}

li {
    font-size: 16px;
    color: #666;
    margin-bottom: 5px;
}
</style>