import { _decorator, Component, Node, log } from 'cc';
const { ccclass } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    private static instance: GameManager | null = null;

    public static getInstance(): GameManager {
        return GameManager.instance!;
    }

    onLoad() {
        GameManager.instance = this;
        log('GameManager initialized');
    }

    start() {
        // Initialize game state
        this.initializeGameState();
    }

    initializeGameState() {
        console.log('Initializing game state...');
        // Game state initialization logic will go here
    }

    update(deltaTime: number) {
        // Global game update logic
    }
}
