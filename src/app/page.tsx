import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Download,
  Grid,
  List,
  Music,
  Video,
  Folder as FolderIcon,
} from "lucide-react";

type Item = {
  id: string;
  name: string;
  date: string;
  size: string;
  type: "Folder" | "Audio" | "Video";
  items?: Item[];
};

const initialData: Item[] = [
  {
    id: "1",
    name: "1_NEW",
    date: "08.23.2024 10:35PM",
    size: "47MB",
    type: "Folder",
    items: [
      {
        id: "1-1",
        name: "No Face - Drake.mp3",
        date: "08.23.2024 10:35PM",
        size: "6MB",
        type: "Audio",
      },
      {
        id: "1-2",
        name: "SOD - Drake.mp3",
        date: "08.23.2024 10:35PM",
        size: "8MB",
        type: "Audio",
      },
      {
        id: "1-3",
        name: "Circadian Rhythm - Drake.mp3",
        date: "08.23.2024 10:35PM",
        size: "5MB",
        type: "Audio",
      },
    ],
  },
  {
    id: "2",
    name: "2.0 6_RELOADED",
    date: "08.22.2024 01:22AM",
    size: "3GB",
    type: "Folder",
    items: [
      {
        id: "2-1",
        name: "Barbados studio mandem 2.mov",
        date: "07.31.2024 10:38PM",
        size: "117MB",
        type: "Video",
      },
      {
        id: "2-2",
        name: "C0007 7.mp4",
        date: "08.01.2024 10:09PM",
        size: "2GB",
        type: "Video",
      },
    ],
  },
  {
    id: "3",
    name: "2.0 ATL_TORONTO",
    date: "08.22.2024 01:22AM",
    size: "567MB",
    type: "Folder",
    items: [],
  },
];

export default function Component() {
  const [currentFolder, setCurrentFolder] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const getCurrentItems = () => {
    let current = initialData;
    for (const folderId of currentFolder) {
      const folder = current.find((item) => item.id === folderId);
      if (folder && folder.items) {
        current = folder.items;
      } else {
        break;
      }
    }
    return current;
  };

  const navigateToFolder = (folderId: string) => {
    setCurrentFolder((prev) => [...prev, folderId]);
  };

  const navigateUp = () => {
    setCurrentFolder((prev) => prev.slice(0, -1));
  };

  const renderIcon = (type: Item["type"]) => {
    switch (type) {
      case "Folder":
        return <FolderIcon size={24} className="text-white" />;
      case "Audio":
        return <Music size={24} className="text-white" />;
      case "Video":
        return <Video size={24} className="text-white" />;
    }
  };

  const renderListItem = (item: Item) => {
    const isFolder = item.type === "Folder";

    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-5 items-center border-b border-gray-700 py-2 cursor-pointer hover:bg-gray-900"
        onClick={() => (isFolder ? navigateToFolder(item.id) : null)}
      >
        <div className="col-span-2 flex items-center">
          {renderIcon(item.type)}
          <span className="ml-2 truncate">{item.name}</span>
        </div>
        <div className="hidden md:block">
          <span className="bg-gray-800 text-xs px-2 py-1 rounded">
            {item.date}
          </span>
        </div>
        <div className="hidden md:block">
          <span className="bg-gray-800 text-xs px-2 py-1 rounded">
            {item.size}
          </span>
        </div>
        <div className="hidden md:flex items-center justify-between">
          <span className="bg-gray-800 text-xs px-2 py-1 rounded">
            {item.type}
          </span>
          {!isFolder && (
            <motion.button
              className="bg-white text-black text-xs px-2 py-1 rounded flex items-center hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Download ${item.name}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Download size={12} className="mr-1" />
              Download
            </motion.button>
          )}
        </div>
      </motion.div>
    );
  };

  const renderGridItem = (item: Item) => {
    const isFolder = item.type === "Folder";

    return (
      <motion.div
        key={item.id}
        className="bg-gray-900 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        onClick={() => (isFolder ? navigateToFolder(item.id) : null)}
      >
        {renderIcon(item.type)}
        <span className="mt-2 truncate w-full">{item.name}</span>
        <span className="text-xs text-gray-400 mt-1">{item.size}</span>
        {!isFolder && (
          <motion.button
            className="bg-white text-black text-xs px-2 py-1 rounded flex items-center mt-2 hover:bg-yellow-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Download ${item.name}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Download size={12} className="mr-1" />
            Download
          </motion.button>
        )}
      </motion.div>
    );
  };

  const renderContent = () => {
    const currentItems = getCurrentItems();

    return (
      <div>
        {currentFolder.length > 0 && (
          <motion.button
            className="mb-4 bg-gray-800 text-white px-3 py-1 rounded flex items-center"
            onClick={navigateUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={16} className="mr-1" />
            Back
          </motion.button>
        )}
        {viewMode === "list" ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-5 text-xs border-b border-gray-800 py-2 md:grid">
              <div className="col-span-2">Name</div>
              <div>Date Added</div>
              <div>Size</div>
              <div>Type</div>
            </div>
            <AnimatePresence>
              {currentItems.map((item) => renderListItem(item))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <AnimatePresence>
              {currentItems.map((item) => renderGridItem(item))}
            </AnimatePresence>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Superstudio',ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] text-sm uppercase">
      <style jsx global>{`
        @font-face {
          font-family: "Superstudio";
          src: url("/fonts/SuperstudioLLWeb-Regular.woff2") format("woff2");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Superstudio";
          src: url("/fonts/SuperstudioLLWeb-Bold.woff2") format("woff2");
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
        body {
          letter-spacing: -0.02em;
          text-transform: uppercase;
          font-size: clamp(14px, 3px + 1.3vw, 20px);
          line-height: 1.2;
        }
      `}</style>
      <header className="fixed top-0 left-0 right-0 bg-black z-10 border-b border-gray-800">
        <div className="container mx-auto py-4 px-4">
          <a
            href="https://www.instagram.com/plottttwistttttt/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            ∙100GigsForYourHeadTop
          </a>
        </div>
      </header>

      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4">{renderContent()}</div>
      </main>

      <div className="fixed bottom-4 right-4 flex space-x-2">
        <motion.button
          className={`p-2 rounded-full transition-colors ${
            viewMode === "list"
              ? "bg-white text-black"
              : "bg-gray-800 text-white"
          }`}
          onClick={() => setViewMode("list")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="List view"
        >
          <List size={20} />
        </motion.button>
        <motion.button
          className={`p-2 rounded-full transition-colors ${
            viewMode === "grid"
              ? "bg-white text-black"
              : "bg-gray-800 text-white"
          }`}
          onClick={() => setViewMode("grid")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Grid view"
        >
          <Grid size={20} />
        </motion.button>
      </div>
    </div>
  );
}
