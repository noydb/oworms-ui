export class AppRoutes {
    static readonly BASE: string = 'ui/worms';

    static readonly ABOUT = `${AppRoutes.BASE}/about`;
    static readonly ADD = `${AppRoutes.BASE}/new`;
    static readonly DETAIL = `${AppRoutes.BASE}/:id/detail`;
    static readonly EDIT = `${AppRoutes.BASE}/:id/edit`;
    static readonly HOME = `${AppRoutes.BASE}/list`;
    static readonly RANDOM = `${AppRoutes.BASE}/random`;
    static readonly SEARCH_OX = `${AppRoutes.BASE}/oxford`;
    static readonly STATS = `${AppRoutes.BASE}/stats`;
}
