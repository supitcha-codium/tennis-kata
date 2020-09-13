//
// Your implementations
// 
export function updateGameScore(player1: number, player2:number) {
    // define score of player 1 and player 2 then return the tuple of score
    const score1 = player1;
    const score2 = player2;
    const score = { score1, score2 };
    return score;
}

export function decideGameWinner(game: { score1, score2 }) {
    // player 1's score is more than player 2's score
    if (game.score1 - game.score2 >= 2) {
        return "Player 1";
    }
    // player 2's score is more than player 1's score
    else if (game.score2 - game.score1 >= 2) {
        return "Player 2";
    }
}

export function printScore([player1, player2]: [number, number]) {
    // player scores are equal
    if (player1 === player2) {
        if (player1 === 0) {
            return "love - love";
        }
        else if (player1 === 1) {
            return "fifteen - fifteen"
        }
        else if (player1 === 2) {
            return "thirty - thirty"
        }
        else if (player1 >= 3) {
            return "deuce"
        }
    }
    else if (player1 >= 3 || player2 >= 3) {
        if (player1 - player2 >= 1) {
            return "advantage player 1"
        }
        else if (player2 - player1 >= 1) {
            return "advantage player 2"
        }
    }
}
