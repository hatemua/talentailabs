import { create } from 'zustand';
import type { WindowConfig, WindowStore } from './types';
import { WINDOW_DEFAULTS } from './constants';

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: {},
  topZIndex: 100,

  getWindow: (id: string) => {
    return get().windows[id];
  },

  getOpenWindows: () => {
    return Object.values(get().windows).filter((w) => w.isOpen && !w.isMinimized);
  },

  getTopZIndex: () => {
    const { topZIndex } = get();
    set({ topZIndex: topZIndex + 1 });
    return topZIndex + 1;
  },

  openWindow: (id: string) => {
    const { windows } = get();
    const existingWindow = windows[id];

    if (existingWindow) {
      // Window exists - restore if minimized, or focus if already open
      if (existingWindow.isMinimized) {
        set({
          windows: {
            ...windows,
            [id]: {
              ...existingWindow,
              isMinimized: false,
              isFocused: true,
              zIndex: get().getTopZIndex(),
            },
          },
        });
      } else {
        get().focusWindow(id);
      }
    } else {
      // Create new window with defaults
      const defaults = WINDOW_DEFAULTS[id as keyof typeof WINDOW_DEFAULTS];
      if (!defaults) {
        console.error(`No defaults found for window: ${id}`);
        return;
      }

      // Calculate center position (client-side safe)
      const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
      const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
      const centerX = (viewportWidth - defaults.size.width) / 2;
      const centerY = (viewportHeight - defaults.size.height) / 2 - 50; // Offset for top bar

      const newWindow: WindowConfig = {
        id,
        title: defaults.title,
        icon: defaults.icon,
        isOpen: true,
        isMinimized: false,
        isFocused: true,
        isMaximized: false,
        position: { x: Math.max(0, centerX), y: Math.max(50, centerY) },
        size: defaults.size,
        minSize: defaults.minSize,
        maxSize: (defaults as any).maxSize,
        zIndex: get().getTopZIndex(),
        hasSidebar: defaults.hasSidebar,
        hasTabs: defaults.hasTabs,
      };

      // Unfocus all other windows
      const updatedWindows = { ...windows };
      Object.keys(updatedWindows).forEach((key) => {
        updatedWindows[key] = { ...updatedWindows[key], isFocused: false };
      });

      set({
        windows: {
          ...updatedWindows,
          [id]: newWindow,
        },
      });
    }
  },

  closeWindow: (id: string) => {
    const { windows } = get();
    const updatedWindows = { ...windows };
    delete updatedWindows[id];

    // Focus the next highest z-index window
    const remainingWindows = Object.values(updatedWindows)
      .filter((w) => w.isOpen && !w.isMinimized)
      .sort((a, b) => b.zIndex - a.zIndex);

    if (remainingWindows.length > 0) {
      updatedWindows[remainingWindows[0].id] = {
        ...remainingWindows[0],
        isFocused: true,
      };
    }

    set({ windows: updatedWindows });
  },

  minimizeWindow: (id: string) => {
    const { windows } = get();
    const window = windows[id];
    if (!window) return;

    const updatedWindows = { ...windows };
    updatedWindows[id] = {
      ...window,
      isMinimized: true,
      isFocused: false,
    };

    // Focus the next highest z-index window
    const remainingWindows = Object.values(updatedWindows)
      .filter((w) => w.isOpen && !w.isMinimized)
      .sort((a, b) => b.zIndex - a.zIndex);

    if (remainingWindows.length > 0) {
      updatedWindows[remainingWindows[0].id] = {
        ...remainingWindows[0],
        isFocused: true,
      };
    }

    set({ windows: updatedWindows });
  },

  maximizeWindow: (id: string) => {
    const { windows } = get();
    const windowConfig = windows[id];
    if (!windowConfig) return;

    const isMaximized = !windowConfig.isMaximized;

    set({
      windows: {
        ...windows,
        [id]: {
          ...windowConfig,
          isMaximized,
          position: isMaximized
            ? { x: 0, y: 40 }
            : {
                x: (globalThis.window.innerWidth - windowConfig.size.width) / 2,
                y: (globalThis.window.innerHeight - windowConfig.size.height) / 2,
              },
          size: isMaximized
            ? { width: globalThis.window.innerWidth, height: globalThis.window.innerHeight - 40 }
            : windowConfig.size,
        },
      },
    });
  },

  focusWindow: (id: string) => {
    const { windows } = get();
    const window = windows[id];
    if (!window || !window.isOpen) return;

    const updatedWindows = { ...windows };

    // Unfocus all windows
    Object.keys(updatedWindows).forEach((key) => {
      updatedWindows[key] = { ...updatedWindows[key], isFocused: false };
    });

    // Focus and bring to front
    updatedWindows[id] = {
      ...window,
      isFocused: true,
      zIndex: get().getTopZIndex(),
    };

    set({ windows: updatedWindows });
  },

  updatePosition: (id: string, position: { x: number; y: number }) => {
    const { windows } = get();
    const window = windows[id];
    if (!window) return;

    set({
      windows: {
        ...windows,
        [id]: {
          ...window,
          position,
          isMaximized: false, // Unmaximize on drag
        },
      },
    });
  },

  updateSize: (id: string, size: { width: number; height: number }) => {
    const { windows } = get();
    const window = windows[id];
    if (!window) return;

    set({
      windows: {
        ...windows,
        [id]: {
          ...window,
          size,
          isMaximized: false, // Unmaximize on resize
        },
      },
    });
  },

  closeAllWindows: () => {
    set({ windows: {} });
  },

  minimizeAllWindows: () => {
    const { windows } = get();
    const updatedWindows = { ...windows };

    Object.keys(updatedWindows).forEach((key) => {
      updatedWindows[key] = {
        ...updatedWindows[key],
        isMinimized: true,
        isFocused: false,
      };
    });

    set({ windows: updatedWindows });
  },
}));
