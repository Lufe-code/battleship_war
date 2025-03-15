# estructura inicial usada

/battleship-game
│── /public               # Archivos públicos (imágenes, sonidos, favicon, etc.)
│── /src                  # Código fuente
│   │── /assets           # Recursos estáticos (imágenes, sonidos, fuentes)
│   │── /styles           # Archivos de estilos CSS
│   │   │── global.css    # Estilos generales
│   │   │── login.css     # Estilos de la página de inicio de sesión
│   │   │── game.css      # Estilos del tablero y la interfaz del juego
│   │── /components       # Componentes reutilizables en JS
│   │   │── grid.js       # Lógica de la cuadrícula del juego
│   │   │── ships.js      # Lógica de las naves y su colocación
│   │   │── scoreboard.js # Manejo de puntajes y almacenamiento
│   │── /pages            # Módulos de cada página
│   │   │── login.js      # Lógica de autenticación
│   │   │── game.js       # Lógica principal del juego
│   │── /utils            # Funciones auxiliares (manejo de eventos, helpers)
│   │── app.js            # Punto de entrada principal del juego
│── /index.html           # Página principal del juego
│── /login.html           # Página de inicio de sesión
│── /leaderboard.html     # Página de clasificación de puntajes
│── package.json          # (Opcional) Si usas npm para gestionar dependencias
│── README.md             # Documentación del proyecto

