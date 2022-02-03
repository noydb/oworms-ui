export class AppRoutes {
    static readonly BASE: string = 'o/worms';

    static readonly ABOUT = `${AppRoutes.BASE}/about`;
    static readonly ADD = `${AppRoutes.BASE}/new`;
    static readonly ALL = `${AppRoutes.BASE}/all`;
    static readonly DETAIL = `${AppRoutes.BASE}/:id/detail`;
    static readonly EDIT = `${AppRoutes.BASE}/:id/edit`;
    static readonly SEARCH_OX = `${AppRoutes.BASE}/oxford`;
    static readonly STATS = `${AppRoutes.BASE}/stats`;

    static getDetail(wordId: number): string {
        if (isNaN(wordId)) {
            throw new Error("not a valid word id");
        }

        return AppRoutes.DETAIL.replace(':id', String(wordId));
    }

    static getEdit(wordId: number): string {
        if (isNaN(wordId)) {
            throw new Error("not a valid word id");
        }

        return AppRoutes.EDIT.replace(':id', String(wordId));
    }
}
