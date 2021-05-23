import { MenuItem } from '../model/menu-item.interface';

export class Config {
    public static readonly MENU_ITEMS: MenuItem[] = [
        { name: 'All Words', path: '/worms' },
        { name: 'Add Word', path: '/worms/add' },
        { name: 'Statistics', path: '/stats' },
    ];
}
