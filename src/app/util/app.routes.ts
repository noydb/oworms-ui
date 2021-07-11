export class AppRoutes {
    static readonly BASE: string = 'ui/worms';

    // word endpoints
    static readonly ADD = `${AppRoutes.BASE}/new`;
    static readonly DETAIL = `${AppRoutes.BASE}/:id`;
    static readonly LIST = `${AppRoutes.BASE}/list`;
    static readonly RANDOM = `${AppRoutes.BASE}/random`;
    static readonly SEARCH = `${AppRoutes.BASE}/search`;
    static readonly SEARCH_OX = `${AppRoutes.BASE}/search/oxford`;

    // other
    static readonly CREDS = 'ui/credentials';
    static readonly STATS = 'ui/statistics';

    static getWordRoute(id: string | number): string {
        return `ui/worms/${id}`;
    }
}
