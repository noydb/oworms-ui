// added 'o/' so requests can be redirected in server.js on prod
export class AppRoutes {
    static readonly BASE: string = 'o/worms';

    static readonly ABOUT = `${AppRoutes.BASE}/about`;
    static readonly ADD = `${AppRoutes.BASE}/new`;
    static readonly ALL = `${AppRoutes.BASE}/all`;
    static readonly DETAIL = `${AppRoutes.BASE}/:uuid/detail`;
    static readonly EDIT = `${AppRoutes.BASE}/:uuid/edit`;
    static readonly STATS = `${AppRoutes.BASE}/stats`;

    static getDetail(uuid: string): string {
        return AppRoutes.DETAIL.replace(':uuid', uuid);
    }

    static getEdit(uuid: string): string {
        return AppRoutes.EDIT.replace(':uuid', uuid);
    }
}
