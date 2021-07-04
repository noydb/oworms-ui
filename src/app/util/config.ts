import { MenuItem } from '../model/menu-item.interface';

export class Config {
    public static readonly MENU_ITEMS: MenuItem[] = [
        { name: 'All Words', path: '/ui/worms/all' },
        { name: 'Add Word', path: '/ui/worms/new' },
        // { name: 'Random Word', path: '/worms/random' },
        // { name: 'Search for Word', path: '/worms/search' },
        { name: 'Statistics', path: '/ui/statistics' },
        // { name: 'Oxford Dict. API', path: '/worms/search/oxford' },
    ];
}
