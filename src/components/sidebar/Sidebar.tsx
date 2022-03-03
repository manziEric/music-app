import { ComponentsProps } from 'utils/types';

function Sidebar({ children }: ComponentsProps): JSX.Element {
  return (
    <div
      className="hidden p-6 basis-1/4 w-full h-auto  mr-20 bg-gray-300 rounded-xl shadow-md md:flex justify-center col-span-1 items-center "
      data-testid="sidebar"
    >
      <p>{children}</p>
    </div>
  );
}

export default Sidebar;
