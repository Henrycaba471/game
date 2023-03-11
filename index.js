const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 750,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        icon: path.join(__dirname, '/assets/images/icon.png')
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

const template = [
    {
        label: 'Opciones',
        submenu: [
            {
                label: 'Intentar de nuevo',
                click: () => {
                    // Acción a realizar al hacer clic en Nuevo
                }
            },
            {
                label: 'Pausar',
                click: () => {
                    // Acción a realizar al hacer clic en Abrir
                }
            },
            {
                label: 'Reanudar',
            }
        ],
    },
    {
        label: 'Salir',
        click: () => {
            app.quit()
        }
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)