type ExpressionValue = unknown;
type ExpressionEnv = Record<string, ExpressionValue>;

export class PetitLogic {
	/**
	 * Evaluates an expression.
	 * @param expr The expression to evaluate. Can be a primitive value, or an array representing an operation.
	 * @param env The environment (scope) for variable lookups.
	 * @returns The result of the evaluation.
	 */
	evaluate(expr: ExpressionValue, env: ExpressionEnv = {}): ExpressionValue {
		if (!Array.isArray(expr)) {
			return expr;
		}

		const [op, ...args] = expr as [ExpressionValue, ...ExpressionValue[]];

		switch (op) {
			case '+':
				if (args.length === 0) return 0;
				return args
					.slice(1)
					.reduce(
						(acc: ExpressionValue, arg: ExpressionValue) =>
							(acc as number) + (this.evaluate(arg, env) as number),
						this.evaluate(args[0], env) as number
					);
			case '*':
				if (args.length === 0) return 1;
				return args
					.slice(1)
					.reduce(
						(acc: ExpressionValue, arg: ExpressionValue) =>
							(acc as number) * (this.evaluate(arg, env) as number),
						this.evaluate(args[0], env) as number
					);
			case '-':
				if (args.length === 1) return -(this.evaluate(args[0], env) as number);
				return (this.evaluate(args[0], env) as number) - (this.evaluate(args[1], env) as number);
			case '/':
				return (this.evaluate(args[0], env) as number) / (this.evaluate(args[1], env) as number);

			case '==':
				return this.evaluate(args[0], env) === this.evaluate(args[1], env);
			case '!=':
				return this.evaluate(args[0], env) !== this.evaluate(args[1], env);
			case '>':
				return (this.evaluate(args[0], env) as number) > (this.evaluate(args[1], env) as number);
			case '<':
				return (this.evaluate(args[0], env) as number) < (this.evaluate(args[1], env) as number);
			case '>=':
				return (this.evaluate(args[0], env) as number) >= (this.evaluate(args[1], env) as number);
			case '<=':
				return (this.evaluate(args[0], env) as number) <= (this.evaluate(args[1], env) as number);

			case '!':
				return !this.evaluate(args[0], env);
			case 'all':
				return args.every((arg: ExpressionValue) => this.evaluate(arg, env));
			case 'any':
				return args.some((arg: ExpressionValue) => this.evaluate(arg, env));

			case 'case': {
				for (let i = 0; i < args.length - 1; i += 2) {
					if (this.evaluate(args[i], env)) {
						return this.evaluate(args[i + 1], env);
					}
				}
				return this.evaluate(args[args.length - 1], env);
			}
			case 'match': {
				const inputVal = this.evaluate(args[0], env);
				for (let i = 1; i < args.length - 1; i += 2) {
					const label = args[i];
					const isMatch = Array.isArray(label)
						? (label as ExpressionValue[]).includes(inputVal)
						: label === inputVal;

					if (isMatch) {
						return this.evaluate(args[i + 1], env);
					}
				}
				return this.evaluate(args[args.length - 1], env);
			}

			case 'let': {
				const currentEnv: ExpressionEnv = { ...env };
				for (let i = 0; i < args.length - 1; i += 2) {
					const name = args[i] as string;
					const value = this.evaluate(args[i + 1], currentEnv);
					currentEnv[name] = value;
				}
				return this.evaluate(args[args.length - 1], currentEnv);
			}
			case 'var':
				return env[args[0] as string];

			case 'literal':
				return args[0];

			case 'typeof':
				return typeof this.evaluate(args[0], env);
			case 'string':
				return String(this.evaluate(args[0], env));
			case 'number':
				return Number(this.evaluate(args[1] !== undefined ? args[1] : args[0], env));
			case 'boolean':
				return Boolean(this.evaluate(args[0], env));

			case 'at': {
				const index = this.evaluate(args[0], env) as number;
				const target = this.evaluate(args[1], env) as ExpressionValue[] | string;
				return target[index];
			}
			case 'in': {
				const item: ExpressionValue = this.evaluate(args[0], env);
				const target = this.evaluate(args[1], env) as ExpressionValue[] | string;
				return target.includes(item as string);
			}
			case 'index-of': {
				const item: ExpressionValue = this.evaluate(args[0], env);
				const target = this.evaluate(args[1], env) as ExpressionValue[] | string;
				return target.indexOf(item as string);
			}
			case 'slice': {
				const start = this.evaluate(args[0], env) as number;
				const end = this.evaluate(args[1], env) as number;
				const target = this.evaluate(args[2], env) as ExpressionValue[] | string;
				return target.slice(start, end);
			}
			case 'length':
				return (this.evaluate(args[0], env) as { length: number }).length;

			case 'get': {
				const path = args[0] as string | string[];
				const obj = this.evaluate(args[1], env) as Record<string, ExpressionValue>;
				return Array.isArray(path)
					? path.reduce(
							(acc: ExpressionValue, key: string) =>
								acc && typeof acc === 'object'
									? (acc as Record<string, ExpressionValue>)[key]
									: undefined,
							obj as ExpressionValue
						)
					: obj[path];
			}
			case 'has': {
				const path = args[0] as string | string[];
				const obj = this.evaluate(args[1], env) as Record<string, ExpressionValue>;
				if (Array.isArray(path)) {
					let current: ExpressionValue = obj;
					for (const key of path) {
						if (current && typeof current === 'object' && key in current) {
							current = (current as Record<string, ExpressionValue>)[key];
						} else {
							return false;
						}
					}
					return true;
				}
				return path in obj;
			}
			case 'set': {
				const path = args[0] as string | string[];
				const value: ExpressionValue = this.evaluate(args[1], env);
				const target = this.evaluate(args[2], env) as Record<string, ExpressionValue>;

				if (Array.isArray(path)) {
					let curr = target;
					for (let i = 0; i < path.length - 1; i++) {
						const key: string = path[i];
						if (!(key in curr)) curr[key] = {};
						curr = curr[key] as Record<string, ExpressionValue>;
					}
					curr[path[path.length - 1] as string] = value;
				} else {
					target[path as string] = value;
				}
				return target;
			}

			case 'replace': {
				const pattern = this.evaluate(args[0], env) as string;
				const flags = this.evaluate(args[1], env) as string;
				const replacement = this.evaluate(args[2], env) as string;
				const target = this.evaluate(args[3], env) as string;
				const regex = new RegExp(pattern, flags);
				return target.replace(regex, replacement);
			}

			default:
				throw new Error(`Unknown operator: ${op}`);
		}
	}
}
