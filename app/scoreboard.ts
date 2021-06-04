import {Result} from "./result";

export class Scoreboard {

    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
    }

    updateScoreboard(): void {
        let output: string = '<h2>Scoreboard</h2>';

        for (let i=0; i < this.results.length; i ++) {
            const result: Result = this.results[i];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>'
        }

        const scoresElement: HTMLElement = document.getElementById('scores')!;
        scoresElement.innerHTML = output;
    }
}
