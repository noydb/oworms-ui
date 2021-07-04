import { MenuItem } from '../model/menu-item.interface';

export class Config {
    public static readonly MENU_ITEMS: MenuItem[] = [
        { name: 'All Words', path: '/worms/all' },
        { name: 'Add Word', path: '/worms/new' },
        // { name: 'Random Word', path: '/worms/random' },
        // { name: 'Search for Word', path: '/worms/search' },
        { name: 'Statistics', path: '/stats' },
        // { name: 'Oxford Dict. API', path: '/worms/search/oxford' },
    ];
}
