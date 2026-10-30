
let bowling = {
    players: [
        { name: 'Livio', scores: [] },
        { name: 'Paola', scores: [] },
        { name: 'Filippo', scores: [] },
        { name: 'Giuseppe', scores: [] }
    ],

    // Genera 10 punteggi casuali per ogni giocatore
    createScores: function () {
        this.players.forEach(player => {
            player.scores = [];

            for (let i = 0; i < 10; i++) {
                let score = Math.floor(Math.random() * 10) + 1;
                player.scores.push(score);
            }
        });
    },

    // Calcola il punteggio finale di ogni giocatore
    finalScores: function () {
        this.players.forEach(player => {
            player.total = player.scores.reduce((sum, score) => sum + score, 0);
        });

        return this.players;
    },

    // Aggiunge un nuovo giocatore e genera i suoi punteggi
    addPlayer: function (name) {
        let newPlayer = {
            name: name,
            scores: []
        };

        for (let i = 0; i < 10; i++) {
            let score = Math.floor(Math.random() * 10) + 1;
            newPlayer.scores.push(score);
        }

        this.players.push(newPlayer);
    },

    // Determina il vincitore
    winner: function () {
        this.finalScores();

        let winner = this.players.reduce((best, player) => {
            return player.total > best.total ? player : best;
        });

        console.log(`Il vincitore è ${winner.name} con ${winner.total} punti!`);

        return winner;
    },

    // EXTRA: Classifica finale in ordine decrescente
    ranking: function () {
        this.finalScores();

        let classification = [...this.players];

        classification.sort((a, b) => b.total - a.total);

        console.log("CLASSIFICA FINALE:");

        classification.forEach((player, index) => {
            console.log(
                `${index + 1}° posto: ${player.name} - ${player.total} punti`
            );
        });

        return classification;
    }
};


// ESECUZIONE DELLE FUNZIONALITÀ

// 1. Genera i punteggi per tutti i giocatori
bowling.createScores();

// 2. Visualizza i punteggi finali
console.log("PUNTEGGI FINALI:");
console.log(bowling.finalScores());

// 3. Aggiunge un nuovo giocatore
bowling.addPlayer('Marco');

// 4. Determina il vincitore
bowling.winner();

// 5. Stampa la classifica finale
bowling.ranking();
