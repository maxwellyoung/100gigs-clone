"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Grid,
  List,
  Music,
  Folder as FolderIcon,
} from "lucide-react";

type Item = {
  id: string;
  name: string;
  date: string;
  duration: string;
  type: "Album" | "EP" | "Song";
  items?: Item[];
};

const lontaliusData: Item[] = [
  {
    id: "1",
    name: "I'll Forget 17",
    date: "2019",
    duration: "38:15",
    type: "Album",
    items: [
      {
        id: "1-1",
        name: "Sleep",
        date: "2019",
        duration: "3:27",
        type: "Song",
      },
      {
        id: "1-2",
        name: "I Wanted Him",
        date: "2019",
        duration: "3:45",
        type: "Song",
      },
      {
        id: "1-3",
        name: "Make My Dreams Come True",
        date: "2019",
        duration: "3:22",
        type: "Song",
      },
      { id: "1-4", name: "Swim", date: "2019", duration: "4:11", type: "Song" },
      {
        id: "1-5",
        name: "Kicker",
        date: "2019",
        duration: "3:38",
        type: "Song",
      },
      {
        id: "1-6",
        name: "Obvious",
        date: "2019",
        duration: "3:51",
        type: "Song",
      },
      {
        id: "1-7",
        name: "Selfless",
        date: "2019",
        duration: "3:29",
        type: "Song",
      },
      {
        id: "1-8",
        name: "Slow Down",
        date: "2019",
        duration: "3:14",
        type: "Song",
      },
      {
        id: "1-9",
        name: "Somebody Told Me",
        date: "2019",
        duration: "3:33",
        type: "Song",
      },
      {
        id: "1-10",
        name: "Everything Is Embarrassing",
        date: "2019",
        duration: "3:45",
        type: "Song",
      },
    ],
  },
  {
    id: "2",
    name: "All I Have",
    date: "2016",
    duration: "43:21",
    type: "Album",
    items: [
      {
        id: "2-1",
        name: "Light Shines Through Dust",
        date: "2016",
        duration: "4:23",
        type: "Song",
      },
      { id: "2-2", name: "Glow", date: "2016", duration: "3:51", type: "Song" },
      {
        id: "2-3",
        name: "Kick In The Head",
        date: "2016",
        duration: "4:02",
        type: "Song",
      },
      {
        id: "2-4",
        name: "Yr Heart Is Beating",
        date: "2016",
        duration: "4:15",
        type: "Song",
      },
      {
        id: "2-5",
        name: "Hands",
        date: "2016",
        duration: "3:57",
        type: "Song",
      },
      {
        id: "2-6",
        name: "Selfless",
        date: "2016",
        duration: "3:44",
        type: "Song",
      },
      {
        id: "2-7",
        name: "All I Have",
        date: "2016",
        duration: "4:31",
        type: "Song",
      },
      {
        id: "2-8",
        name: "Comfortable",
        date: "2016",
        duration: "3:38",
        type: "Song",
      },
      {
        id: "2-9",
        name: "It's Too Late",
        date: "2016",
        duration: "3:55",
        type: "Song",
      },
      {
        id: "2-10",
        name: "Falling In Love",
        date: "2016",
        duration: "4:05",
        type: "Song",
      },
    ],
  },
  {
    id: "3",
    name: "Someone Will Be There For You",
    date: "2021",
    duration: "41:33",
    type: "Album",
    items: [
      {
        id: "3-1",
        name: "Don't Dream It's Over",
        date: "2021",
        duration: "4:03",
        type: "Song",
      },
      {
        id: "3-2",
        name: "Faded",
        date: "2021",
        duration: "3:57",
        type: "Song",
      },
      {
        id: "3-3",
        name: "Words For Now",
        date: "2021",
        duration: "3:49",
        type: "Song",
      },
      {
        id: "3-4",
        name: "Someone Will Be There For You",
        date: "2021",
        duration: "4:12",
        type: "Song",
      },
      {
        id: "3-5",
        name: "Carousel",
        date: "2021",
        duration: "3:41",
        type: "Song",
      },
      {
        id: "3-6",
        name: "Landslide",
        date: "2021",
        duration: "4:18",
        type: "Song",
      },
      {
        id: "3-7",
        name: "Cowboy",
        date: "2021",
        duration: "3:55",
        type: "Song",
      },
      {
        id: "3-8",
        name: "Gasoline",
        date: "2021",
        duration: "3:36",
        type: "Song",
      },
      {
        id: "3-9",
        name: "Alive",
        date: "2021",
        duration: "4:07",
        type: "Song",
      },
      {
        id: "3-10",
        name: "Ghosts",
        date: "2021",
        duration: "3:55",
        type: "Song",
      },
    ],
  },
  {
    id: "4",
    name: "Bedroom",
    date: "2020",
    duration: "15:23",
    type: "EP",
    items: [
      {
        id: "4-1",
        name: "Bedroom",
        date: "2020",
        duration: "3:12",
        type: "Song",
      },
      {
        id: "4-2",
        name: "Static",
        date: "2020",
        duration: "3:05",
        type: "Song",
      },
      {
        id: "4-3",
        name: "Mouthful",
        date: "2020",
        duration: "3:18",
        type: "Song",
      },
      { id: "4-4", name: "Hazy", date: "2020", duration: "2:58", type: "Song" },
      {
        id: "4-5",
        name: "Blink",
        date: "2020",
        duration: "2:50",
        type: "Song",
      },
    ],
  },
  {
    id: "5",
    name: "I'll Be The Rain",
    date: "2022",
    duration: "17:45",
    type: "EP",
    items: [
      {
        id: "5-1",
        name: "I'll Be The Rain",
        date: "2022",
        duration: "3:33",
        type: "Song",
      },
      {
        id: "5-2",
        name: "Minute By Minute",
        date: "2022",
        duration: "3:42",
        type: "Song",
      },
      {
        id: "5-3",
        name: "Leaving",
        date: "2022",
        duration: "3:29",
        type: "Song",
      },
      {
        id: "5-4",
        name: "Afterglow",
        date: "2022",
        duration: "3:38",
        type: "Song",
      },
      {
        id: "5-5",
        name: "Circles",
        date: "2022",
        duration: "3:23",
        type: "Song",
      },
    ],
  },
  {
    id: "6",
    name: "How Can We Lose When We're So Sincere!?",
    date: "2024",
    duration: "37:00",
    type: "Album",
    items: [
      {
        id: "6-1",
        name: "When The Seasons Roll Over",
        date: "2024",
        duration: "2:34",
        type: "Song",
      },
      {
        id: "6-2",
        name: "130224",
        date: "2024",
        duration: "3:07",
        type: "Song",
      },
      {
        id: "6-3",
        name: "Runner Up",
        date: "2024",
        duration: "2:48",
        type: "Song",
      },
      {
        id: "6-4",
        name: "Not My Fight",
        date: "2024",
        duration: "2:58",
        type: "Song",
      },
      {
        id: "6-5",
        name: "Gave In",
        date: "2024",
        duration: "3:13",
        type: "Song",
      },
      {
        id: "6-6",
        name: "Lie To Me",
        date: "2024",
        duration: "2:47",
        type: "Song",
      },
      {
        id: "6-7",
        name: "Casualty",
        date: "2024",
        duration: "2:51",
        type: "Song",
      },
      {
        id: "6-8",
        name: "I Got It Bad",
        date: "2024",
        duration: "3:09",
        type: "Song",
      },
      {
        id: "6-9",
        name: "290224",
        date: "2024",
        duration: "3:18",
        type: "Song",
      },
      {
        id: "6-10",
        name: "Angel",
        date: "2024",
        duration: "2:37",
        type: "Song",
      },
      {
        id: "6-11",
        name: "Come Straight To Me",
        date: "2024",
        duration: "2:49",
        type: "Song",
      },
      {
        id: "6-12",
        name: "Acetone",
        date: "2024",
        duration: "2:51",
        type: "Song",
      },
      {
        id: "6-13",
        name: "Not Afraid",
        date: "2024",
        duration: "2:42",
        type: "Song",
      },
      {
        id: "6-14",
        name: "We Learn From Our Mistakes",
        date: "2024",
        duration: "2:43",
        type: "Song",
      },
      {
        id: "6-15",
        name: "Wish Love Wouldn't Haunt Me",
        date: "2024",
        duration: "2:48",
        type: "Song",
      },
      {
        id: "6-16",
        name: "Apologise / City",
        date: "2024",
        duration: "2:55",
        type: "Song",
      },
    ],
  },
];

export default function Component() {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const toggleFolder = (folderId: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folderId)
        ? prev.filter((id) => id !== folderId)
        : [...prev, folderId]
    );
  };

  const navigateToFolder = (folderId: string) => {
    setCurrentPath((prev) => [...prev, folderId]);
  };

  const navigateUp = () => {
    setCurrentPath((prev) => prev.slice(0, -1));
  };

  const getCurrentItems = () => {
    let current = lontaliusData;
    for (const folderId of currentPath) {
      const folder = current.find((item) => item.id === folderId);
      if (folder && folder.items) {
        current = folder.items;
      } else {
        break;
      }
    }
    return current;
  };

  const renderIcon = (type: Item["type"]) => {
    switch (type) {
      case "Album":
      case "EP":
        return <FolderIcon size={24} className="text-white" />;
      case "Song":
        return <Music size={24} className="text-white" />;
    }
  };

  const togglePlay = (id: string) => {
    setIsPlaying((prev) => (prev === id ? null : id));
  };

  const renderListItem = (item: Item, depth: number = 0) => {
    const isFolder = item.type === "Album" || item.type === "EP";
    const isExpanded = expandedFolders.includes(item.id);

    return (
      <React.Fragment key={item.id}>
        <div
          className={`grid grid-cols-1 md:grid-cols-5 items-center border-b border-gray-700 py-2 cursor-pointer hover:bg-gray-900`}
          onClick={() =>
            isFolder ? toggleFolder(item.id) : togglePlay(item.id)
          }
        >
          <div
            className="col-span-2 flex items-center"
            style={{ paddingLeft: `${depth * 20}px` }}
          >
            {isFolder &&
              (isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              ))}
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
              {item.duration}
            </span>
          </div>
          <div className="hidden md:flex items-center justify-between">
            <span className="bg-gray-800 text-xs px-2 py-1 rounded">
              {item.type}
            </span>
            {!isFolder && (
              <button
                className="bg-white text-black text-xs px-2 py-1 rounded flex items-center hover:bg-yellow-300 transition-colors"
                aria-label={
                  isPlaying === item.id
                    ? `Pause ${item.name}`
                    : `Play ${item.name}`
                }
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay(item.id);
                }}
              >
                {isPlaying === item.id ? (
                  <Pause size={12} />
                ) : (
                  <Play size={12} />
                )}
              </button>
            )}
          </div>
        </div>
        {isExpanded && item.items && (
          <div>
            {item.items.map((subItem) => renderListItem(subItem, depth + 1))}
          </div>
        )}
      </React.Fragment>
    );
  };

  const renderGridItem = (item: Item) => {
    const isFolder = item.type === "Album" || item.type === "EP";

    return (
      <div
        key={item.id}
        className="bg-gray-900 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-800"
        onClick={() =>
          isFolder ? navigateToFolder(item.id) : togglePlay(item.id)
        }
      >
        {renderIcon(item.type)}
        <span className="mt-2 truncate w-full">{item.name}</span>
        <span className="text-xs text-gray-400 mt-1">{item.date}</span>
        {!isFolder && (
          <button
            className="bg-white text-black text-xs px-2 py-1 rounded flex items-center mt-2 hover:bg-yellow-300 transition-colors"
            aria-label={
              isPlaying === item.id ? `Pause ${item.name}` : `Play ${item.name}`
            }
            onClick={(e) => {
              e.stopPropagation();
              togglePlay(item.id);
            }}
          >
            {isPlaying === item.id ? <Pause size={12} /> : <Play size={12} />}
          </button>
        )}
      </div>
    );
  };

  const renderContent = () => {
    const currentItems = getCurrentItems();

    return (
      <div>
        {currentPath.length > 0 && (
          <button
            className="mb-4 bg-gray-800 text-white px-3 py-1 rounded flex items-center hover:bg-gray-700"
            onClick={navigateUp}
          >
            <ChevronLeft size={16} className="mr-1" />
            Back
          </button>
        )}
        {viewMode === "list" ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-5 text-xs border-b border-gray-800 py-2 md:grid">
              <div className="col-span-2">Name</div>
              <div>Year</div>
              <div>Duration</div>
              <div>Type</div>
            </div>
            {currentItems.map((item) => renderListItem(item))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {currentItems.map((item) => renderGridItem(item))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono text-sm uppercase">
      <header className="fixed top-0 left-0 right-0 bg-black z-10 border-b border-gray-800">
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-xl font-bold">Lontalius Music Catalog</h1>
        </div>
      </header>

      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4">{renderContent()}</div>
      </main>

      <div className="fixed bottom-4 right-4 flex space-x-2">
        <button
          className={`p-2 rounded-full transition-colors ${
            viewMode === "list"
              ? "bg-white text-black"
              : "bg-gray-800 text-white"
          }`}
          onClick={() => setViewMode("list")}
          aria-label="List view"
        >
          <List size={20} />
        </button>
        <button
          className={`p-2 rounded-full transition-colors ${
            viewMode === "grid"
              ? "bg-white text-black"
              : "bg-gray-800 text-white"
          }`}
          onClick={() => setViewMode("grid")}
          aria-label="Grid view"
        >
          <Grid size={20} />
        </button>
      </div>
    </div>
  );
}
