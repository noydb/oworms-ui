export function Unsubscribes(blackList: string[] = []) {

    return function (constructor: any) {
        const original: Function = constructor.prototype.ngOnDestroy;

        constructor.prototype.ngOnDestroy = function () {
            for (const prop of Object.keys(this)) {
                const property = this[prop];

                if (!blackList.includes(property)) {
                    if (property && typeof property.unsubscribe === 'function') {
                        property.unsubscribe();
                    }
                }
            }
        }

        original && typeof original === 'function' && original.apply(this, arguments);
    }
}
