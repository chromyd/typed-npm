export class Math {
	square(n: number): number {
		return n*n;
	}
}

export const signum = (n: number): number => {
    return n === 0 ? 0
	: n > 0 ? 1
	: -1;
};
