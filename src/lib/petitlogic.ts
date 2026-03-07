export class PetitLogic {
	/**
	 * Evaluates an expression.
	 * @param expr The expression to evaluate. Can be a primitive value, or an array representing an operation.
	 * @param env The environment (scope) for variable lookups.
	 * @returns The result of the evaluation.
	 */
	evaluate(expr: any, env: Record<string, any> = {}): any {
		// Primitive values (numbers, strings, booleans, etc.) are returned as is.
		if (!Array.isArray(expr)) {
			return expr;
		}

		const [op, ...args] = expr;

		switch (op) {
			// Arithmetic and concatenation
			case '+':
				if (args.length === 0) return 0;
				return args
					.slice(1)
					.reduce(
						(acc: any, arg: any) => acc + this.evaluate(arg, env),
						this.evaluate(args[0], env)
					);
			case '*':
				if (args.length === 0) return 1;
				return args
					.slice(1)
					.reduce(
						(acc: any, arg: any) => acc * this.evaluate(arg, env),
						this.evaluate(args[0], env)
					);
			case '-':
				if (args.length === 1) return -this.evaluate(args[0], env); // Unary operation
				return this.evaluate(args[0], env) - this.evaluate(args[1], env);
			case '/':
				return this.evaluate(args[0], env) / this.evaluate(args[1], env);

			// Comparison
			case '==':
				return this.evaluate(args[0], env) === this.evaluate(args[1], env);
			case '!=':
				return this.evaluate(args[0], env) !== this.evaluate(args[1], env);
			case '>':
				return this.evaluate(args[0], env) > this.evaluate(args[1], env);
			case '<':
				return this.evaluate(args[0], env) < this.evaluate(args[1], env);
			case '>=':
				return this.evaluate(args[0], env) >= this.evaluate(args[1], env);
			case '<=':
				return this.evaluate(args[0], env) <= this.evaluate(args[1], env);

			// Logical
			case '!':
				return !this.evaluate(args[0], env);
			case 'all':
				return args.every((arg: any) => this.evaluate(arg, env));
			case 'any':
				return args.some((arg: any) => this.evaluate(arg, env));

			// Conditional branching: case
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
					const label = args[i]; // The label itself is assumed to be a literal, so it is not evaluated.
					const isMatch = Array.isArray(label)
						? (label as any[]).includes(inputVal)
						: label === inputVal;

					if (isMatch) {
						return this.evaluate(args[i + 1], env);
					}
				}
				return this.evaluate(args[args.length - 1], env);
			}

			// Variable manipulation
			case 'let': {
				let currentEnv: Record<string, any> = { ...env };
				// The last one is the body, so proceed two by two until i < args.length - 1.
				for (let i = 0; i < args.length - 1; i += 2) {
					const name = args[i] as string;
					const value = this.evaluate(args[i + 1], currentEnv);
					currentEnv[name] = value;
				}
				// Evaluate the last argument in the new environment and return it.
				return this.evaluate(args[args.length - 1], currentEnv);
			}
			case 'var':
				return env[args[0] as string];

			// Literal (return as is without evaluation)
			case 'literal':
				return args[0];

			// Type conversion/check
			case 'typeof':
				return typeof this.evaluate(args[0], env);
			case 'string':
				return String(this.evaluate(args[0], env));
			case 'number':
				return Number(this.evaluate(args[1] !== undefined ? args[1] : args[0], env));
			case 'boolean':
				return Boolean(this.evaluate(args[0], env));

			// Collection/string manipulation
			case 'at': {
				const index: number = this.evaluate(args[0], env);
				const target: any[] | string = this.evaluate(args[1], env);
				return target[index];
			}
			case 'in': {
				const item: any = this.evaluate(args[0], env);
				const target: any[] | string = this.evaluate(args[1], env);
				return target.includes(item);
			}
			case 'index-of': {
				const item: any = this.evaluate(args[0], env);
				const target: any[] | string = this.evaluate(args[1], env);
				return target.indexOf(item);
			}
			case 'slice': {
				const start: number = this.evaluate(args[0], env);
				const end: number = this.evaluate(args[1], env);
				const target: any[] | string = this.evaluate(args[2], env);
				return target.slice(start, end);
			}
			case 'length':
				return (this.evaluate(args[0], env) as { length: number }).length;

			// Object manipulation (nested support)
			case 'get': {
				const path: string | string[] = args[0];
				const obj: Record<string, any> = this.evaluate(args[1], env);
				return Array.isArray(path)
					? path.reduce((acc: any, key: string) => acc?.[key], obj)
					: obj[path];
			}
			case 'has': {
				const path: string | string[] = args[0];
				const obj: Record<string, any> = this.evaluate(args[1], env);
				if (Array.isArray(path)) {
					let current: any = obj;
					for (const key of path) {
						if (current && key in current) {
							current = current[key];
						} else {
							return false;
						}
					}
					return true;
				}
				return path in obj;
			}
			case 'set': {
				const path: string | string[] = args[0];
				const value: any = this.evaluate(args[1], env);
				const target: Record<string, any> = this.evaluate(args[2], env);

				if (Array.isArray(path)) {
					// Set to a deep level
					let curr: Record<string, any> = target;
					for (let i = 0; i < path.length - 1; i++) {
						const key: string = path[i];
						if (!(key in curr)) curr[key] = {}; // Create if the intermediate path does not exist.
						curr = curr[key];
					}
					curr[path[path.length - 1] as string] = value;
				} else {
					// Set to a single key
					target[path as string] = value;
				}
				return target;
			}

			case 'replace': {
				const pattern: string = this.evaluate(args[0], env);
				const flags: string = this.evaluate(args[1], env);
				const replacement: string = this.evaluate(args[2], env);
				const target: string = this.evaluate(args[3], env);
				const regex = new RegExp(pattern, flags);
				return target.replace(regex, replacement);
			}

			default:
				throw new Error(`Unknown operator: ${op}`);
		}
	}
}
