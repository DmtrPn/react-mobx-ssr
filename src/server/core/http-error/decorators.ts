import { sprintf } from 'sprintf-js';
import { NotFoundError } from './NotFoundError';

function throwNotFoundErrorOnNullResult(errorMessageTemplate: string) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }

        const originalMethod = descriptor.value;

        descriptor.value = async(...args: any[]) => {
            const res = await originalMethod.apply(target, args);
            if (!res) {
                const message = sprintf(errorMessageTemplate, args);
                throw new NotFoundError(message);
            }
            return res;
        };

        return descriptor;
    };
}

export { throwNotFoundErrorOnNullResult };
