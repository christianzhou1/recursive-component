import { FolderIcon } from "@heroicons/react/24/solid";

export default function Home() {
  let folders = [
    {
      name: "Home",
      folders: [
        {
          name: "Desktop",
          folders: [
            {
              name: "Programming",
              folders: [{ name: "React" }, { name: "Vue" }],
            },
            { name: "School" },
          ],
        },
        {
          name: "Documents",
          folders: [
            { name: "Projects" },
            { name: "Notes", folders: [{ name: "CS101" }, { name: "CS102" }] },
          ],
        },
        { name: "Music", folders: [{ name: "Albums" }, { name: "Artists" }] },
        {
          name: "Pictures",
          folders: [{ name: "Wallpapers" }, { name: "Screenshots" }],
        },
      ],
    },
  ];
  /* returns all folders recursively */
  function RenderFolders({ folder }) {
    return (
      <li className="my-1.5" key={folder.name}>
        <span className="flex items-center gap-2">
          <FolderIcon className="size-6  text-blue-400" />
          {folder.name}
        </span>
        <ul className="pl-6">
          {folder.folders?.map((folder) => (
            <RenderFolders folder={folder} key={folder.name} />
          ))}
        </ul>
      </li>
    );
  }
  return (
    <div id="container">
      {/* Recursive using RenderFolders */}
      <div id="recursive" className="p-8 mx-auto max-w-sm">
        <ul>
          {folders.map((folder) => (
            <RenderFolders folder={folder} key={folder.name} />
          ))}
        </ul>
      </div>
      {/* Non-recursive */}
      <div id="non-recursive" className="p-8 mx-auto max-w-sm">
        <ul>
          {folders.map((folder) => (
            <li className="my-1.5" key={folder.name}>
              <span className="flex items-center gap-2">
                <FolderIcon className="size-6  text-blue-400" />
                {folder.name}
              </span>
              <ul className="pl-6">
                {folder.folders?.map((subfolder) => (
                  <li className="my-1.5" key={subfolder.name}>
                    <span className="flex items-center gap-2">
                      <FolderIcon className="size-6  text-blue-400" />
                      {subfolder.name}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
