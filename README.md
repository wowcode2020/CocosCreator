# Cocos Creator Game

A web-based game project built with Cocos Creator 3.x, featuring a complete scaffold ready for game development.

## 🎮 Features

- **Cocos Creator 3.x** latest stable version
- **Web deployment** ready with responsive design
- **Physics enabled** for realistic game mechanics
- **Modular architecture** with organized asset folders
- **TypeScript support** for type-safe development
- **Automated build system** with npm scripts

## 📁 Project Structure

```
cocos-creator-game/
├── assets/                 # Game assets and scripts
│   ├── scripts/           # TypeScript/JavaScript components
│   ├── prefabs/           # Reusable game objects
│   ├── textures/          # Sprite images and textures
│   ├── audio/             # Sound effects and music
│   └── tilemaps/          # Tile-based level data
├── scripts/               # Build and development scripts
├── build/                 # Built game files (generated)
├── project.json           # Cocos Creator project configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # NPM dependencies and scripts
├── build.config.json      # Build settings for web deployment
└── index.html             # Game entry point
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Cocos Creator** (optional, for full editor integration)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd cocos-creator-game
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser and navigate to:**
   ```
   http://localhost:8080
   ```

## 🛠️ Development

### Using Cocos Creator Editor (Recommended)

1. **Install Cocos Creator:**
   - Download from [https://www.cocos.com/creator](https://www.cocos.com/creator)
   - Install and launch the editor

2. **Open the project:**
   - In Cocos Creator, select "Open Project"
   - Navigate to the project folder and open it
   - The project will be automatically recognized as a Cocos Creator project

3. **Edit scenes and assets:**
   - Open `assets/MainScene.scene` in the editor
   - The scene contains placeholder nodes ready for your game logic:
     - **PlayerSpawn**: Where player characters will spawn
     - **EnemySpawner**: Enemy generation point
     - **HUDLayer**: UI elements layer
     - **BackgroundTilemap**: Background terrain layer

### Using Command Line Only

If you prefer to develop without the Cocos Creator editor:

1. **Edit scripts:**
   - TypeScript files in `assets/scripts/`
   - JavaScript equivalents are auto-generated for web deployment

2. **Build and test:**
   ```bash
   npm run build        # Compile TypeScript and build assets
   npm run serve        # Start local server
   ```

3. **Clean build:**
   ```bash
   npm run clean        # Remove build artifacts
   ```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Build the project for web deployment |
| `npm run build:web` | Specifically build for web platform |
| `npm run dev` | Start development server |
| `npm run serve` | Run local web server |
| `npm run clean` | Clean build directories |
| `npm run cocos:run` | Run using Cocos Creator CLI (requires Cocos Creator installation) |
| `npm run cocos:compile` | Compile using Cocos Creator CLI |
| `npm start` | Alias for `npm run dev` |

## ⚙️ Configuration

### Build Configuration

Edit `build.config.json` to customize build settings:

- **Design Resolution**: 800x600 (responsive scaling enabled)
- **Physics**: Enabled with built-in physics engine
- **Platform**: Web (mobile-optimized)
- **Features**: Tilemap, Spine, DragonBones, and more

### TypeScript Configuration

The project includes a `tsconfig.json` with strict TypeScript settings:

- ES2015 target
- CommonJS modules
- Strict type checking enabled
- Decorator support for Cocos Creator components

### Package Configuration

The `package.json` includes development dependencies and scripts for building and serving the project.

## 🎯 Main Scene Structure

The default `MainScene` includes placeholder nodes:

- **PlayerSpawn** (400, 300): Player character spawn point
- **EnemySpawner** (400, 500): Enemy generation system
- **HUDLayer** (400, 300): UI overlay for game interface
- **BackgroundTilemap** (400, 300, z: -10): Background terrain

All nodes are positioned and configured for immediate use in your game logic.

## 🌐 Web Deployment

The project is configured for web deployment:

- **Responsive canvas scaling** for different screen sizes
- **Touch controls** support for mobile devices
- **Optimized loading** with progress indicator
- **Physics engine** enabled for realistic collisions
- **WebGL rendering** for high performance

## 🔧 Physics and Features

### Enabled Physics
- **Built-in Physics Engine**: Fast and lightweight
- **Collision Detection**: Automatic for web deployment
- **Rigid Bodies**: Support for dynamic and static objects

### Supported Features
- **2D Tilemaps**: For level design
- **Sprite Animation**: For character and object animation
- **Particle Systems**: For visual effects
- **Audio Support**: Web Audio API integration
- **Input Handling**: Mouse, keyboard, and touch controls

## 📱 Responsive Design

The game automatically adapts to different screen sizes:

- **Design Resolution**: 800x600
- **Auto-scaling**: Maintains aspect ratio
- **Touch-friendly**: Optimized for mobile devices
- **Canvas Centering**: Automatic centering on all screen sizes

## 🚢 Deployment Options

### Static Web Hosting
Simply upload the `build/` directory to any web server:

```bash
npm run build
# Upload contents of 'build' directory to your web server
```

### Popular Hosting Services
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a `gh-pages` branch
- **Firebase Hosting**: Use Firebase CLI

### Custom Server
For custom server deployment:

1. Build the project: `npm run build`
2. Serve the `build` directory with any web server
3. Ensure proper MIME types for `.wasm` and asset files

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with TypeScript errors:**
   ```bash
   npm run clean
   npm install
   npm run build
   ```

2. **Server won't start:**
   - Check if port 8080 is available
   - Try: `npm run serve -- --port 3000`

3. **Cocos Creator CLI not found:**
   ```bash
   npm install -g @cocos/creator-cli
   ```

4. **Physics not working:**
   - Ensure physics is enabled in `build.config.json`
   - Check browser WebGL support

### Performance Tips

- Use texture atlases for better performance
- Enable texture compression in production builds
- Minify JavaScript for web deployment
- Use object pooling for frequently created/destroyed objects

## 📚 Documentation

- [Cocos Creator Documentation](https://docs.cocos.com/creator/manual/en/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [WebGL Best Practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)

## 🤝 Contributing

1. Create feature branches from `main`
2. Follow the existing code style
3. Test thoroughly on multiple platforms
4. Update documentation as needed

## 📄 License

MIT License - see LICENSE file for details

---

**Happy Game Development!** 🎮✨
