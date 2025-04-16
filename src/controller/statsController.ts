export class StatsController {
    calculateBoxPlot(numbers: number[]) {
        if (numbers.length !== 100) throw new Error("El array debe tener 100 números");

        const sorted = [...numbers].sort((a, b) => a - b);
        
        // Cálculo de quartiles y mediana
        const q1 = this.calculatePercentile(sorted, 25);
        const median = this.calculatePercentile(sorted, 50);
        const q3 = this.calculatePercentile(sorted, 75);
        
        // Rango interquartil (IQR)
        const iqr = q3 - q1;
        
        // Límites para outliers
        const lowerBound = q1 - 1.5 * iqr;
        const upperBound = q3 + 1.5 * iqr;
        
        // Filtrar outliers
        const filtered = sorted.filter(num => num >= lowerBound && num <= upperBound);
        
        return {
            min: Math.min(...filtered),
            q1,
            median,
            q3,
            max: Math.max(...filtered),
            outliers: sorted.filter(num => num < lowerBound || num > upperBound)
        };
    }

    private calculatePercentile(sorted: number[], percentile: number): number {
        const index = (percentile / 100) * (sorted.length - 1);
        if (Number.isInteger(index)) {
            return sorted[index];
        }
        const lower = Math.floor(index);
        const upper = Math.ceil(index);
        return (sorted[lower] + sorted[upper]) / 2;
    }
}