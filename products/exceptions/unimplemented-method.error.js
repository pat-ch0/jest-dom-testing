export class UnimplementedMethodError extends Error {
    constructor(message) {
        super(`${message}  must be implemented in children class`)
    }
}