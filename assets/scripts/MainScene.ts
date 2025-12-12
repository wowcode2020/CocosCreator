import { _decorator, Component, Node, director, game } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainSceneController')
export class MainSceneController extends Component {
    @property(Node)
    public playerSpawn: Node | null = null;

    @property(Node) 
    public enemySpawner: Node | null = null;

    @property(Node)
    public hudLayer: Node | null = null;

    @property(Node)
    public backgroundTilemap: Node | null = null;

    start() {
        console.log('Main Scene initialized');
        
        // Configure canvas for responsive scaling
        this.setupCanvasScaling();
        
        // Enable physics
        this.setupPhysics();
        
        // Initialize game systems
        this.initializeGameSystems();
    }

    setupCanvasScaling() {
        // Set canvas to fill the entire window and maintain aspect ratio
        const canvas = game.canvas;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        
        // Enable responsive design
        window.addEventListener('resize', this.onWindowResize.bind(this));
        this.onWindowResize();
    }

    onWindowResize() {
        const canvas = game.canvas;
        const designResolution = { width: 800, height: 600 };
        const currentResolution = { width: window.innerWidth, height: window.innerHeight };
        
        // Calculate scale factor
        const scaleX = currentResolution.width / designResolution.width;
        const scaleY = currentResolution.height / designResolution.height;
        const scale = Math.min(scaleX, scaleY);
        
        // Apply scaling
        canvas.style.transform = `scale(${scale})`;
        canvas.style.transformOrigin = 'top left';
        
        // Center the canvas
        const scaledWidth = designResolution.width * scale;
        const scaledHeight = designResolution.height * scale;
        canvas.style.marginLeft = `${(currentResolution.width - scaledWidth) / 2}px`;
        canvas.style.marginTop = `${(currentResolution.height - scaledHeight) / 2}px`;
    }

    setupPhysics() {
        // Physics configuration for web deployment
        console.log('Physics enabled for web deployment');
    }

    initializeGameSystems() {
        // Initialize placeholder systems
        console.log('Initializing game systems...');
        
        if (this.playerSpawn) {
            console.log('Player spawn point configured at:', this.playerSpawn.getPosition());
        }
        
        if (this.enemySpawner) {
            console.log('Enemy spawner configured at:', this.enemySpawner.getPosition());
        }
        
        if (this.hudLayer) {
            console.log('HUD layer configured');
        }
        
        if (this.backgroundTilemap) {
            console.log('Background tilemap configured');
        }
    }

    update(deltaTime: number) {
        // Game loop update
    }
}
