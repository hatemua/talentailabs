// TypeScript interfaces for macOS desktop OS

export interface WindowConfig {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isFocused: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  minSize: { width: number; height: number };
  maxSize?: { width: number; height: number };
  zIndex: number;
  isMaximized?: boolean;
  hasSidebar?: boolean;
  hasTabs?: boolean;
}

export interface WindowStore {
  windows: Record<string, WindowConfig>;
  topZIndex: number;
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updatePosition: (id: string, position: { x: number; y: number }) => void;
  updateSize: (id: string, size: { width: number; height: number }) => void;
  closeAllWindows: () => void;
  minimizeAllWindows: () => void;
  getWindow: (id: string) => WindowConfig | undefined;
  getOpenWindows: () => WindowConfig[];
  getTopZIndex: () => number;
}

export interface DesktopIconConfig {
  id: string;
  title: string;
  icon: string;
  position: { row: number; col: number };
  action: () => void;
}

export interface DockIconConfig {
  id: string;
  title: string;
  icon: string;
  action: () => void;
}

export interface NotificationConfig {
  id: string;
  title: string;
  message: string;
  icon?: string;
  duration?: number;
  action?: () => void;
}

export interface TerminalCommand {
  command: string;
  output: string | string[] | (() => string);
  action?: () => void;
}

export interface WallpaperConfig {
  id: string;
  name: string;
  gradient: string;
  description?: string;
}

export interface MenuBarItem {
  label: string;
  items: MenuBarItemAction[];
}

export interface MenuBarItemAction {
  label: string;
  action: () => void;
  shortcut?: string;
  separator?: boolean;
}
