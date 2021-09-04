export = dotenv_expand;

interface DotenvResult {
    error?: Error;
    parsed?: {
        [name: string]: string;
    };
    ignoreProcessEnv: boolean
}

declare function dotenv_expand(config: DotenvResult): DotenvResult;

declare namespace dotenv_expand {
    const prototype: {
    };
}
