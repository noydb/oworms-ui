// added 'o/' so requests can be redirected in server.js on prod
export class AppRoutes {
    static readonly BASE: string = 'o/worms';

    static readonly ABOUT: string = `${AppRoutes.BASE}/about`;
    static readonly ADD: string = `${AppRoutes.BASE}/new`;
    static readonly CREDENTIAL: string = `${AppRoutes.BASE}/credentials`;
    static readonly ALL: string = `${AppRoutes.BASE}/all`;
    static readonly DETAIL: string = `${AppRoutes.BASE}/:uuid/detail`;
    static readonly EDIT: string = `${AppRoutes.BASE}/:uuid/edit`;
    static readonly STATS: string = `${AppRoutes.BASE}/stats`;
    static readonly PROFILE: string = 'o/profile';

    static getDetail(uuid: string): string {
        return AppRoutes.DETAIL.replace(':uuid', uuid);
    }

    static getEdit(uuid: string): string {
        return AppRoutes.EDIT.replace(':uuid', uuid);
    }
}
